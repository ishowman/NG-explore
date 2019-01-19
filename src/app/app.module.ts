import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ChildCompOneComponent } from './child-comp-one/child-comp-one.component';
import { ChildCompTwoComponent } from './child-comp-two/child-comp-two.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildCompOneComponent,
    ChildCompTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
