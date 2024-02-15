import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DellLatitudeComponent } from './landing-pages/dell-latitude/dell-latitude.component';
import { DellOptiplexComponent } from './landing-pages/dell-optiplex/dell-optiplex.component';
import { DellPrecisionComponent } from './landing-pages/dell-precision/dell-precision.component';
import { DellVostroComponent } from './landing-pages/dell-vostro/dell-vostro.component';
import { QuantumRealmComponent } from './landing-pages/quantum-realm/quantum-realm.component';
import { DellAllInOneComponent } from './landing-pages/dell-all-in-one/dell-all-in-one.component';
import { DellLatitudeQ3Component } from './landing-pages/dell-latitude-q3/dell-latitude-q3.component';
import { DellVostroQ3Component } from './landing-pages/dell-vostro-q3/dell-vostro-q3.component';

const routes: Routes = [
  { path: 'dell-latitude', component: DellLatitudeComponent },
  { path: 'dell-optiplex', component: DellOptiplexComponent },
  { path: 'dell-precision', component: DellPrecisionComponent },
  { path: 'dell-vostro', component: DellVostroComponent },
  { path: 'dell-all-in-one', component: DellAllInOneComponent },
  { path: 'quantum-realm', component: QuantumRealmComponent },
  { path: 'dell-latitude-q3', component: DellLatitudeQ3Component },
  { path: 'dell-vostro-q3', component: DellVostroQ3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
