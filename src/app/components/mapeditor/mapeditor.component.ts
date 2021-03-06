import { Component, OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mapeditor',
  templateUrl: './mapeditor.component.html',
  styleUrls: ['./mapeditor.component.css']
})

export class MapeditorComponent implements OnInit {
  private step: string;
  public structures: any;
  public structure: any;
  public dimensions: DimensionInterface[] = [];
  public errors: string[] = [];
  public createBuildingName = '';
  public createBuildingLat = '';
  public createBuildingLong = '';

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.step = 'list';
    this.dataService.getCurrentSchool();
    this.getStructures();
  }

  reloadStructures() {
    this.getStructures();
  }

  getStructures() {
    this.dataService.getStructures().subscribe(data => {
      if (data as any) {
        this.structures = data;
      }
    });
  }

  clearNewStructureVars() {
    this.createBuildingLat = '';
    this.createBuildingLong = '';
    this.createBuildingName = '';
  }

  validateDimensionForm() {
    // first we must validate the form
    // there must be an equal amount of starts and ends
    // there must be at least one start
    // there must be no empty x,y coord fields
    let startCount = 0;
    let endCount = 0;
    this.errors = [];

    for (let i = 0; i < this.dimensions.length; i++) {
      if (this.dimensions[i].s === true) {
        startCount++;
      }
      if (this.dimensions[i].e === true) {
        endCount++;
      }
      if (this.dimensions[i].w === '') {
        this.errors.push('Missing x-coordinate at point ' + i);
      }
      if (this.dimensions[i].h === '') {
        this.errors.push('Missing y-coordinate at point ' + i);
      }
    }

    if (startCount === 0) {
      this.errors.push('There are no start points.');
    }
    if (endCount === 0) {
      this.errors.push('There are no end points');
    }

    if (startCount !== endCount) {
      this.errors.push('There are an uneven number of start and end points');
    }
  }

  saveNewStructure() {
    if (this.createBuildingName.length === 0) {
      this.errors.push('Invalid name for a structure');
      return;
    } else {
      const obj = {
        buildingName: this.createBuildingName,
        schoolID: this.dataService.getCurrentSchool().schoolID,
        lat: this.createBuildingLat,
        long: this.createBuildingLong
      };
      this.dataService.saveNewStructure(obj).subscribe(function () {
          console.log('Inserted');
      });
    }
  }

  saveDimensions() {
    this.validateDimensionForm();

    console.log(this.errors);
    // if no errors
    if (this.errors.length === 0) {
      const obj = {
        schoolID: this.dataService.getCurrentSchool().schoolID,
        buildingID: this.dataService.getCurrentBuilding(),
        dimensions: this.dimensions
      };
      console.log(obj);
      this.dataService.saveDimensions(obj).subscribe(data => {
        console.log(data);
      });
    }
  }

  validateLatLongForm() {
    this.errors = [];

    if (!/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/.test(this.structure.lat)) {
      this.errors.push('Latitude (' + this.structure.lat + ') is not a valid value');
    }

    if (!/^[+-]?((180\.?0*$)|(((1[0-7][0-9])|([0-9]{0,2}))\.?[0-9]*$))/.test(this.structure.long)) {
      this.errors.push('Longitude (' + this.structure.long + ') is not a valid value');
    }

    const nameRegEx = new RegExp('.+');
    if (!nameRegEx.test(this.structure.buildingName)) {
      this.errors.push('Name field is blank');
    }
  }

  saveDetails() {
    this.validateLatLongForm();
    // if no errors
    if (this.errors.length === 0) {
      // there is a bug in Angular 5 that sometimes causes a submit button to fire
      // twice, once without parameters and once with

      const obj = {
        schoolID: this.dataService.getCurrentSchool().schoolID,
        buildingID: this.structure.buildingID,
        name: this.structure.buildingName,
        lat: this.structure.lat,
        long: this.structure.long
      };
      console.log(obj);
      this.dataService.saveDetails(obj).subscribe(data => {
        console.log(data);
      });
    }
  }

  getStep() {
    return this.step;
  }

  setStep(_step) {
    this.errors = [];
    this.step = _step;
    if (_step === 'list') {
      this.getStructures();
    }
  }

  editLatLong(buildingID) {
    this.step = 'editlatlong';
    this.dataService.setCurrentBuilding(buildingID);
    this.parseOutBuilding(buildingID);
  }

  editDimensions(buildingID) {
    this.step = 'editdimensions';
    this.dataService.setCurrentBuilding(buildingID);
    this.dimensions = [];
    this.dataService.getStructureDimensions(buildingID).subscribe(data => {
      if (data as any) {
        let newData: DimensionInterface[];
        newData = Array.from(data as any);

        for (let i = 0; i < newData.length; i++) {
          newData[i].s = this.isTrue(newData[i].s);
          newData[i].e = this.isTrue(newData[i].e);
          this.pushDimensions(newData[i]);
        }
      }
    });

    this.parseOutBuilding(buildingID);
  }

  pushDimensions(d) {
    const oneDimension: DimensionInterface = {
      p: Number(d.p),
      w: String(d.w),
      h: String(d.h),
      s: Boolean(d.s),
      e: Boolean(d.e)
    };
    this.dimensions.push(oneDimension);
  }

  isNotLast(p) {
    return p < this.dimensions.length - 1 ? true : false;
  }

  isNotFirst(p) {
    return p === 0 ? false : true;
  }

  renumerate() {
    for (let i = 0; i < this.dimensions.length; i++) {
      this.dimensions[i].p = i;
    }
  }

  moveDimensionDown(i) {
    if (i === this.dimensions.length - 1) {
      console.log('Already at the bottom');
      return;
    }

    const temp = this.dimensions[i];
    this.dimensions[i] = this.dimensions[i + 1];
    this.dimensions[i + 1] = temp;
    this.renumerate();
  }

  moveDimensionUp(i) {
    if (i === 0) {
      console.log('Already at the top');
      return;
    }

    const temp = this.dimensions[i - 1];
    this.dimensions[i - 1] = this.dimensions[i];
    this.dimensions[i] = temp;
    this.renumerate();
  }

  deleteDimension(p) {
    if (this.dimensions.length === 1) {
      console.log('Cannot delete the last point');
      return;
    }

    console.log('Deleting point ' + p);
    const newDimensions: DimensionInterface[] = [];

    for (const d of this.dimensions) {
      if (d.p !== p) {
        d.p = newDimensions.length;
        newDimensions.push(d);
      }
    }
    this.dimensions = newDimensions;
  }

  addDimension() {
    const newDimension: DimensionInterface = {
      p: this.dimensions.length,
      w: '',
      h: '',
      s: false,
      e: false
    };
    this.pushDimensions(newDimension);
  }

  insertHere(p) {
    const newDimension: DimensionInterface = {
      p: 0,
      w: '',
      h: '',
      s: false,
      e: false
    };
    this.dimensions.splice(p, 0, newDimension);
    this.renumerate();
  }

  parseOutBuilding(buildingID) {
    for (const s of this.structures) {
      if (s.buildingID === buildingID) {
        this.structure = s;
        return;
      }
    }
  }

  startCheckHit(i) {
    this.dimensions[i].s = !this.dimensions[i].s;
  }

  endCheckHit(i) {
    this.dimensions[i].e = !this.dimensions[i].e;
  }

  isTrue(val) {
    if (val === '1') {
      return true;
    } else {
      return false;
    }
  }

  debug() {
    console.log(this.dimensions);
  }
}

interface DimensionInterface {
  p: number;
  w: string;
  h: string;
  s: boolean;
  e: boolean;
}

interface LatLongInterface {
  buildingID: string;
  buildingName: string;
  lat: string;
  long: string;
}

interface StructureBase {
    schoolID: string;
    buildingID: string;
    buildingName: string;
    lat: string;
    long: string;
}
