import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickInformationComponent } from './pick-information.component';

describe('PickInformationComponent', () => {
  let component: PickInformationComponent;
  let fixture: ComponentFixture<PickInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
