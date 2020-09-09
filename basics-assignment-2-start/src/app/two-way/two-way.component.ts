import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }
  username = '';
  emptyUserName = this.username.length === 0 ? true : false;

  checkEmpty() {
    this.emptyUserName = this.username.length === 0 ? true : false;
  }
  clearUserName() {
    this.username = '';
  }

  ngOnInit(): void {
  }

}
