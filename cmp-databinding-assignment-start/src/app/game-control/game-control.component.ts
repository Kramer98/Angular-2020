import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() startNumber: number;
  @Output() gameRunning = new EventEmitter<{ newNumber: Number }>();
  public newNumber: number;
  startIncrement: any;
  constructor() {
  }

  startGame() {
    this.newNumber = this.startNumber
    this.startIncrement = setInterval(() => {
      this.newNumber++
      this.gameRunning.emit({ newNumber: this.newNumber })
      // this.startNumber = this.newNumber;
    }, 1000)
  }
  stopGame() {
    clearInterval(this.startIncrement)
  }
  ngOnInit(): void {
  }

}
