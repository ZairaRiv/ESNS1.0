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

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.step = 'list';
    this.dataService.getCurrentSchool();
    this.getStructures();
  }

  validateForm() {
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

  saveDimensions() {
    this.validateForm();

    // if no errors
    if (this.errors.length === 0) {
      const obj = {
        schoolID: this.dataService.getCurrentSchool().schoolID,
        buildingID: this.dataService.getCurrentBuilding(),
        dimensions: this.dimensions
      };
      console.log(obj);
    }
  }

  getStep() {
    return this.step;
  }

  setStep(_step) {
    this.step = _step;
  }

  editLatLong(buildingID) {
    this.step = 'editlatlong';
    this.dataService.setCurrentBuilding(buildingID);
    this.parseOutBuilding(buildingID);
  }

  editDimensions(buildingID) {
    this.step = 'editdimensions';
    this.dataService.setCurrentBuilding(buildingID);
    this.dataService.getStructureDimensions(buildingID).subscribe(data => {
      if (data as any) {
        let newData: DimensionInterface[];
        newData = Array.from(data as any);

        for (let i = 0; i < newData.length; i++) {
          newData[i].s = this.isTrue(newData[i].s);
          newData[i].e = this.isTrue(newData[i].e);
          this.pushDimensions(newData[i]);
        }

        this.deleteDimension(10);
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
    let newDimensions: DimensionInterface[] = [];

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

  getStructures() {
    this.dataService.getStructures().subscribe(data => {
      if (data as any) {
        console.log(data);
        this.structures = data;
      }
    });
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
