import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IncomeComponentComponent } from './income-component/income-component.component';
import { ExpenditureComponentComponent } from './expenditure-component/expenditure-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponentComponent,
    ExpenditureComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
