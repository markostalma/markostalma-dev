import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { RouteAnimationsComponent } from './route-animations.component';
import { MasterDetailsPipe } from './pipes/master-details.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutHomeComponent } from './home/about-home/about-home.component';
import { WorkHomeComponent } from './home/work-home/work-home.component';
import { ProcessHomeComponent } from './home/process-home/process-home.component';
import { ContactHomeComponent } from './home/contact-home/contact-home.component';
import { ProcessComponent } from './process/process.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WorkSingleComponent } from './work/work-single/work-single.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    RouteAnimationsComponent,
    MasterDetailsPipe,
    AppComponent,
    HomeComponent,
    AboutHomeComponent,
    WorkHomeComponent,
    ProcessHomeComponent,
    ContactHomeComponent,
    ProcessComponent,
    NotFoundComponent,
    AboutComponent,
    WorkComponent,
    WorkSingleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
