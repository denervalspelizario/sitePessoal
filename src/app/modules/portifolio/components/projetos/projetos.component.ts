import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjectsInterface';
import { MatDialog } from '@angular/material/dialog';


// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../../../components/dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

  // inject do modal
  #dialog = inject(MatDialog)

  // array com dados dos projetos
  public arrayProjetos = signal<IProjects[]>([
    {
      src: '../../../../../assets/shih-tzu.jpg',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: '../../../../../assets/shih-tzu.jpg',
      alt: 'Projeto Vida FullStack 2',
      title: 'Vida FullStack 2',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },

  ]);

  // Modal
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      // projetos
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

}
