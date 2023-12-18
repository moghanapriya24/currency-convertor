import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyCompComponent } from './components/currency-comp/currency-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
