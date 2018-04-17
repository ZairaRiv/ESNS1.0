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
  public dimensions: any;

  constructor(private dataService: DataService) { }

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
    console.log('editing');
    this.setStep('editlatlong');
    this.dataService.setCurrentBuilding(buildingID);
    this.parseOutBuilding(buildingID);
  }

  editDimensions(buildingID) {
    console.log('editing');
    this.setStep('editdimensions');
    this.dataService.setCurrentBuilding(buildingID);
    this.dataService.getStructureDimensions(buildingID).subscribe(data => {
        if (data as any) {
          console.log(data);
          this.dimensions = data;
          for (const d of this.dimensions) {
            d.e = this.isTrue(d.e);
            d.s = this.isTrue(d.s);
            d.w = d.w as number;
            d.h = d.h as number;
          }
        }
    });
    this.parseOutBuilding(buildingID);
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
      if ((data as any)) {
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
