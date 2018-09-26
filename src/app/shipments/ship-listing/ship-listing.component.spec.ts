import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipListingComponent } from './ship-listing.component';

describe('ShipListingComponent', () => {
  let component: ShipListingComponent;
  let fixture: ComponentFixture<ShipListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
