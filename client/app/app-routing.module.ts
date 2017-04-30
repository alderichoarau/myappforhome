import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ContactComponent } from './contact/contact.component';
import { OpinionComponent } from './opinion/opinion.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'opinion', component: OpinionComponent },
  { path: 'price', component: PriceComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
