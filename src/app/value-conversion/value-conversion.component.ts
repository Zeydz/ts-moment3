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
  meterValue: number = 0;
  footValue: number = 0;

  convertMeterToFoot() {
    this.footValue = this.meterValue * 3.28084;
  }

  convertFootToMeter() {
    this.meterValue = this.footValue / 3.28084;
  }
}
