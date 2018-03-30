import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindstudentpublicComponent } from './findstudentpublic.component';

describe('FindstudentpublicComponent', () => {
  let component: FindstudentpublicComponent;
  let fixture: ComponentFixture<FindstudentpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindstudentpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindstudentpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
