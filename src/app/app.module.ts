import {  NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { HeaderComponent } from './modules/portifolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portifolio/components/knowledge/knowledge.component';
import { ExperienciasComponent } from './modules/portifolio/components/experiencias/experiencias.component';
import { ProjetosComponent } from './modules/portifolio/components/projetos/projetos.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { DialogProjectsComponent } from './modules/components/dialog/dialog-projects/dialog-projects.component';
import { MenuComponent } from './modules/portifolio/components/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ContatoComponent } from './modules/portifolio/components/contato/contato.component';

// formulario angular material
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    KnowledgeComponent,
    ExperienciasComponent,
    ProjetosComponent,
    DialogProjectsComponent,
    MenuComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,

    // formulario angular material
    MatFormFieldModule,
    MatInputModule,
    //MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
