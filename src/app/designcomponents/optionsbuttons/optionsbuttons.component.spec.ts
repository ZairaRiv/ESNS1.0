import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsbuttonsComponent } from './optionsbuttons.component';

describe('OptionsbuttonsComponent', () => {
  let component: OptionsbuttonsComponent;
  let fixture: ComponentFixture<OptionsbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
