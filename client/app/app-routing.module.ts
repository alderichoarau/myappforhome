import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpinionComponent } from './opinion/opinion.component';
import { RoomComponent } from './room/room.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'opinion', component: OpinionComponent },
  { path: 'room', component: RoomComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price', component: PriceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
