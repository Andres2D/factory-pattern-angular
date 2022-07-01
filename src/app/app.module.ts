import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionComponent } from './components/action/action.component';
import { providers } from './app.component.providers';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
