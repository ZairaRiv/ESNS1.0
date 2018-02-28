import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapeComponent } from './rape.component';

describe('RapeComponent', () => {
  let component: RapeComponent;
  let fixture: ComponentFixture<RapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
