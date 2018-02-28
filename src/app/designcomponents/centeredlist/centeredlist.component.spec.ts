import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredlistComponent } from './centeredlist.component';

describe('CenteredlistComponent', () => {
  let component: CenteredlistComponent;
  let fixture: ComponentFixture<CenteredlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenteredlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
