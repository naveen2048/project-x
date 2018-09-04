import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsFilterSectionComponent } from './shipments-filter-section.component';

describe('ShipmentsFilterSectionComponent', () => {
  let component: ShipmentsFilterSectionComponent;
  let fixture: ComponentFixture<ShipmentsFilterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsFilterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
