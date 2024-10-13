import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { SitesIntitucionaisComponent } from './modules/portifolio/pages/sites-intitucionais/sites-intitucionais.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent },
  {path: 'sites-institucionais', component: SitesIntitucionaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
