import { Component, OnInit } from '@angular/core';
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

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.step = 'list';
    this.dataService.getCurrentSchool();
    this.getStructures();
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
        console.log(newData.length);

        for (let i = 0; i < newData.length; i++) {
          console.log(newData[i]);
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
      w: Number(d.w),
      h: Number(d.h),
      s: Boolean(d.s),
      e: Boolean(d.e)
    };
    this.dimensions.push(oneDimension);
  }


  moveDimensionDown(i) {
    if (i === this.dimensions.length - 1) {
      console.log('Already at the bottom');
      return;
    }

  }

  moveDimensionUp(i) {
    if (i === 0) {
      console.log('Already at the top');
      return;
    }


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
    console.log(this.dimensions);
  }

  addDimension() {
    this.step = 'easdasd';
    console.log('adding dimension');
    const newDimension: DimensionInterface = {
      p: this.dimensions.length,
      w: 0,
      h: 0,
      s: false,
      e: false
    };
    this.dimensions.push(newDimension);
    console.log(this.dimensions);

    this.step = 'editdimensions';
  }

  startCheckHit(i) {
    this.dimensions[i].s = !this.dimensions[i].s;
  }

  endCheckHit(i) {
    this.dimensions[i].e = !this.dimensions[i].e;
  }

  changeX(i,x) {
    console.log('X CHANGE');
    console.log(i);
    console.log(x);
    this.dimensions[i].w = x;
    console.log(this.dimensions[i]);
  }

  changeY(i,y) {
    this.dimensions[i].h = y;
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

  isTrue(val) {
    if (val === '1') {
      return true;
    } else {
      return false;
    }
  }
}

interface DimensionInterface {
  p: number;
  w: number;
  h: number;
  s: boolean;
  e: boolean;
}

interface LatLongInterface {
  buildingID: string;
  buildingName: string;
  lat: string;
  long: string;
}