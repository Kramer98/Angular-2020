import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Observable, Subscription } from "rxjs";

import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObjSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObjSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("count is greater than 3"));
        }
        count++;
      }, 1000);
    });

    this.firstObjSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("completed");
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObjSubscription.unsubscribe();
  }
}
