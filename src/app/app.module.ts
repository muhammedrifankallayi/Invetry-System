import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MeterialModule} from './meterial/meterial.module'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MeterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
