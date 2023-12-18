import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCompComponent } from './currency-comp.component';

describe('CurrencyCompComponent', () => {
  let component: CurrencyCompComponent;
  let fixture: ComponentFixture<CurrencyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
