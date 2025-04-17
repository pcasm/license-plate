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
      for (let i = 0; i < input; i++) {
        // space left for numbers before letters
        const numberLength = this.plateTotalFigures - letters.length;
        // max number vale for its current space left
        const maxNumber = 10 ** numberLength - 1;

        if (numbers < maxNumber) {
          numbers++;
        } else {
          numbers = 0;
          let success = false;

          if (letters === '') {
            letters = 'A';
            success = true;
          } else {
            let lettersArray = letters.split('');
            // loop letters from right to left, skipping the Z's
            for (let letterIndex = lettersArray.length - 1; letterIndex >= 0; letterIndex--) {
              if (lettersArray[letterIndex] !== 'Z') {
                // this one has not reached the Z yet, so increment it to the next letter in the alphabet
                lettersArray[letterIndex] = this.alphabet[this.alphabet.indexOf(lettersArray[letterIndex]) + 1];
                for (let nextLetterIndex = letterIndex + 1; nextLetterIndex < lettersArray.length; nextLetterIndex++) {
                  // set all letters to the right hand to A's
                  lettersArray[nextLetterIndex] = 'A';
                }
                letters = lettersArray.join('');
                success = true;
                break;
              }
            }

            if (!success && letters.length < this.plateTotalFigures) {
              // all letters are Z's but still one can be added
              letters = 'A'.repeat(letters.length + 1);
              success = true;
            }

            if (!success) throw new Error('Number is too big');
          }
        }
      }

      this.showResult(numbers, letters);
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
