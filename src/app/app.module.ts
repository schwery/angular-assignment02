import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CardKeschaeComponent } from './card-keschae/card-keschae.component';
import { SelectedStudentComponent } from './selected-student/selected-student.component';

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
