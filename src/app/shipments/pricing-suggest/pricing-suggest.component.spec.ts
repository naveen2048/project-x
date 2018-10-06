import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSuggestComponent } from './pricing-suggest.component';

describe('PricingSuggestComponent', () => {
  let component: PricingSuggestComponent;
  let fixture: ComponentFixture<PricingSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
