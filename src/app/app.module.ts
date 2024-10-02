import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { HeaderComponent } from './modules/portifolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portifolio/components/knowledge/knowledge.component';
import { ExperienciasComponent } from './modules/portifolio/components/experiencias/experiencias.component';
import { ProjetosComponent } from './modules/portifolio/components/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    KnowledgeComponent,
    ExperienciasComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
