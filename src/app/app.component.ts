import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButton, MatInput, MatFormField],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})

  export class AppComponent {
  title = 'License Plate Calculator';
  inputNumber!: number;
  outputLicensePlate= '';
  plateTotalFigures = 6;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  error = '';

  getLicensePlate() {
    let input = this.inputNumber;
    let numbers = 0;
    let letters = '';

    try {
      // Try to find the letter length needed for the inputNumber
      for (let letterCount = 0; letterCount <= this.plateTotalFigures; letterCount++) {
        const numberLength = this.plateTotalFigures - letterCount;
        const maxNumbers = 10 ** numberLength;
        const maxLetters = letterCount === 0 ? 1 : 26 ** letterCount;
        const maxTotal = maxNumbers * maxLetters;

        if (input < maxTotal) {
          // For this combination of numbers and letters length, the inputNumber can be fit
          let lettersIndex = Math.floor(input / maxNumbers);
          numbers = input % maxNumbers;

          // Convert lettersIndex into an actual letters string
          letters = '';
          let remainingIndex = lettersIndex;
          for (let i = 0; i < letterCount; i++) {
            const letterCode = remainingIndex % 26;
            letters = this.alphabet[letterCode] + letters;
            remainingIndex = Math.floor(remainingIndex / 26);
          }

          this.showResult(numbers, letters);
          return;
        } else {
          // Subtract the numbers used for the current letter and loop again adding a new letter to the combination
          input -= maxTotal;
        }
      }

      throw new Error('Input number too large');

    } catch (error: any) {
      this.error = 'Error: ' + error.message;
    }
  }

  showResult(numbers: number, letters: string) {
    if (letters.length === this.plateTotalFigures) {
      this.outputLicensePlate = letters;
    } else {
      const numPart = numbers.toString().padStart(this.plateTotalFigures - letters.length, '0');
      this.outputLicensePlate = numPart + letters;
    }
  }

  resetFlags() {
    this.error = '';
    this.outputLicensePlate = '';
  }

}
