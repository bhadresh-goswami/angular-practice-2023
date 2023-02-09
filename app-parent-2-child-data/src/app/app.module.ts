import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseDetailsChildComponent } from './course-details-child/course-details-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseParentComponent,
    CourseDetailsChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
