import { Component } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = Math.floor(Math.random() * 10) + 1
  numbers = [this.number];

  onGameRunning(newNumber: { newNumber: number }) {
    console.log(newNumber.newNumber)
    this.numbers.push(newNumber.newNumber)
    this.number = newNumber.newNumber
    console.log(this.numbers)
  }

}
