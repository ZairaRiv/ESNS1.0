import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigboxComponent } from './bigbox.component';

describe('BigboxComponent', () => {
  let component: BigboxComponent;
  let fixture: ComponentFixture<BigboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
