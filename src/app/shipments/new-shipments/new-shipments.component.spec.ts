import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShipmentsComponent } from './new-shipments.component';

describe('NewShipmentsComponent', () => {
  let component: NewShipmentsComponent;
  let fixture: ComponentFixture<NewShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
