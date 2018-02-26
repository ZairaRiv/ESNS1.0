import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredtextComponent } from './centeredtext.component';

describe('CenteredtextComponent', () => {
  let component: CenteredtextComponent;
  let fixture: ComponentFixture<CenteredtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenteredtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
