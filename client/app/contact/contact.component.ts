import { Component, NgModule, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 43.57901799999999;
  lng: number = 1.4446762000000035;

}