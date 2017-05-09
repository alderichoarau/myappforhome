import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Les pages 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PriceComponent } from './price/price.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
// import { ContactFormComponent } from './contactform/contactform.component';

// Les modules
import { DataService } from './services/data.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpModule, Http } from "@angular/http";
import { TooltipModule } from "ngx-tooltip";
import { Ng2DropdownModule } from 'ng2-material-dropdown';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    RestaurantComponent,
    OpinionComponent,
    PriceComponent,
    LocalisationComponent,
    ContactComponent,
    AboutComponent
    // ContactFormComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    HttpModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    // apikey generate by google console
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
