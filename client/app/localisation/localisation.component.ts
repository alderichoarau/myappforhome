import { Component, NgModule, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent {

  // google maps zoom level
  zoom: number = 11;

  // initial center position for the map
  lat: number = 43.57901799999999;
  lng: number = 1.4446762000000035;
  label: string = "A";

  // Place du capitole
  latB: number = 43.6044292;
  lngB: number = 1.4438121000000592;
  labelB: string = "B";

  // Cité de l'espace
  latC: number = 43.586938;
  lngC: number = 1.4931850000000395;
  labelC: string = "C";

  // Gare
  latD: number = 43.6112356;
  lngD: number = 1.4537473999999975;
  labelD: string = "D";

  // Aeroport
  latE: number = 43.6293863;
  lngE: number = 1.367682000000059;
  labelE: string = "E";
}