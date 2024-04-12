import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueConversionComponent } from './value-conversion.component';

describe('ValueConversionComponent', () => {
  let component: ValueConversionComponent;
  let fixture: ComponentFixture<ValueConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueConversionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
