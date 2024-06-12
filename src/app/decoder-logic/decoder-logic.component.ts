import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-decoder-logic',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './decoder-logic.component.html',
  styleUrl: './decoder-logic.component.css',
})
export class DecoderLogicComponent {
  integer: number = 0;
  roman: string = '';
  notRomanNumeral: boolean = false;

  getValue(val: string) {
    this.roman = val;
    this.notRomanNumeral = false;
    this.romanToInt(this.roman.toUpperCase());
  }
  romanToInt(roman: string): number {
    let sum = 0;
    let previousValue = 0;
    console.log(roman, 'roman param');
    const value: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    for (let i = 0; i < roman.length; i++) {
      const currentValue = value[roman[i]];
      sum +=
        currentValue > previousValue
          ? currentValue - 2 * previousValue
          : currentValue;
      previousValue = currentValue;
    }
    if (!Number.isNaN(sum) || undefined || 0) {
      return (this.integer = sum);
    }
    this.notRomanNumeral = true;
    return NaN;
  }
}
