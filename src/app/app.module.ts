import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './components';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './states';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todoStore: todoReducer
      // structure is 
      // stateName: stateReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
