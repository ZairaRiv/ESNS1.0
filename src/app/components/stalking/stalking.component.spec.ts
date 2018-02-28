import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkingComponent } from './stalking.component';

describe('StalkingComponent', () => {
  let component: StalkingComponent;
  let fixture: ComponentFixture<StalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
