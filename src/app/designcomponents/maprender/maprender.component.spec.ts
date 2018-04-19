import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaprenderComponent } from './maprender.component';

describe('MaprenderComponent', () => {
  let component: MaprenderComponent;
  let fixture: ComponentFixture<MaprenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaprenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
