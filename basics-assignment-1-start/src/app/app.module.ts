import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessComponent } from './success alert/success-alert.component'
import { WarningComponent } from './warning-alert/warning-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
