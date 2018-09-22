import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';
import { CardRshriv1Component } from './card-rshriv1/card-rshriv1.component';

// should end up with 9 student component cards being imported here
// and 9 more in NgModule
// I'm going to trust Git merge for these

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CardKeschaeComponent,
    SelectedStudentComponent,
    CardRshriv1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
