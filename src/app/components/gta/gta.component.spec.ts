import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtaComponent } from './gta.component';

describe('GtaComponent', () => {
  let component: GtaComponent;
  let fixture: ComponentFixture<GtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
