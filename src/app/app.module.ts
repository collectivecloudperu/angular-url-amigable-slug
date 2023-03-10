import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivaSlugDirective } from './directiva-slug.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaSlugDirective
  ],
  exports: [
    DirectivaSlugDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
