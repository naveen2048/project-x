import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreYouShippingComponent } from './what-are-you-shipping.component';

describe('WhatAreYouShippingComponent', () => {
  let component: WhatAreYouShippingComponent;
  let fixture: ComponentFixture<WhatAreYouShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreYouShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreYouShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
