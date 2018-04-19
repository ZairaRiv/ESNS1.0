import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlinksComponent } from './adminlinks.component';

describe('AdminlinksComponent', () => {
  let component: AdminlinksComponent;
  let fixture: ComponentFixture<AdminlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
