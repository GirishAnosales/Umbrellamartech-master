import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DellLatitudeComponent } from './landing-pages/dell-latitude/dell-latitude.component';
import { DellOptiplexComponent } from './landing-pages/dell-optiplex/dell-optiplex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DellPrecisionComponent } from './landing-pages/dell-precision/dell-precision.component';
import { DellVostroComponent } from './landing-pages/dell-vostro/dell-vostro.component';
import { QuantumRealmComponent } from './landing-pages/quantum-realm/quantum-realm.component';
import { DellAllInOneComponent } from './landing-pages/dell-all-in-one/dell-all-in-one.component';
import { DellLatitudeQ3Component } from './landing-pages/dell-latitude-q3/dell-latitude-q3.component';
import { DellVostroQ3Component } from './landing-pages/dell-vostro-q3/dell-vostro-q3.component';

@NgModule({
  declarations: [
    AppComponent,
    DellLatitudeComponent,
    DellOptiplexComponent,
    DellPrecisionComponent,
    DellVostroComponent,
    QuantumRealmComponent,
    DellAllInOneComponent,
    DellLatitudeQ3Component,
    DellVostroQ3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
