import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpinionComponent } from './opinion/opinion.component';
import { RoomComponent } from './room/room.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './services/data.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OpinionComponent,
    RoomComponent,
    PriceComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1VGEnxbOIo06RCAkZ8fL9aGOv7bK1Zvg'
    })
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
