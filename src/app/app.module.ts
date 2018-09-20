import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';

// should end up with 9 student component cards being imported here
// and 9 more in NgModule
// I'm going to trust Git merge for these

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardKeschaeComponent,
    SelectedStudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
