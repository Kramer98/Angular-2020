import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.blue{
    background-color:blue;
    color:white;
  }
  `]
})
export class AppComponent {
  togglePara = true;
  // noOfClicks = 0;
  noOfClicksArray = []

  toggleDetails() {
    this.togglePara = !this.togglePara;
    // this.noOfClicks++;
    this.noOfClicksArray.push(new Date())
  }


}
