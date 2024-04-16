import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-value-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './value-conversion.component.html',
  styleUrl: './value-conversion.component.scss'
})
export class ValueConversionComponent { 
  /* Deklarerar default värde */
  meterValue: number = 0;
  footValue: number = 0;
  celsiusValue: number = 0;
  fahrenheitValue: number = 32;

  /* Konverterar Meter till Foot */
  convertMeterToFoot() {
    this.footValue = this.meterValue * 3.28084;
  }
  /* Konverterar Foot till Meter */
  convertFootToMeter() {
    this.meterValue = this.footValue / 3.28084;
  }
  /* Konvertera Celsius till Fahrenheit */
  convertCelsiusToFahrenheit() {
    this.fahrenheitValue = (this.celsiusValue * 9/5) + 32;
  }
  /* Konvertera Fahrenheit till Celsius */
  convertFahrenheitToCelsius() {
    this.celsiusValue = (this.fahrenheitValue - 32) * 5/9;
  }
}