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
      src: '../../../../../assets/lading-pages.png',
      alt: 'Landing Pages desenvolvidas',
      title: 'Landing Pages',
      with: '100px',
      height: '51px',
      description:
        '<p>Desenvolvo landing pages personalizadas e focadas em conversão, que vão te ajudar a:</p>  <p> • Captar leads qualificados: Atraia visitantes interessados em seus produtos ou serviços.</p> <p> • Aumentar suas vendas: Transforme visitantes em clientes com páginas persuasivas e otimizadas.</p> <p> • Divulgar suas ofertas: Apresente suas promoções e novidades de forma clara e objetiva. </p> <p> • Fortalecer sua marca: Crie landing pages com a identidade visual da sua empresa. </p>'  ,
      links: [
        {
          name: 'Conheça meu portifolio',
          href: 'https://wp-pages.denerdev.com.br',
        },
      ],
    },
    {
      src: '../../../../../assets/sites-institucionais.png',
      alt: 'Sites Institucionais',
      title: 'Sites Institucionais',
      with: '100px',
      height: '51px',
      description:
        '<p>Desenvolvo sites institucionais modernos e eficazes, que vão te ajudar a:</p>  <p> • Fortalecer a presença online: Seja encontrado por seus clientes na internet.</p> <p> • Construir credibilidade: Transmita confiança e profissionalismo aos seus visitantes.</p> <p> • Apresentar seus produtos e serviços: Mostre o que sua empresa oferece de forma clara e organizada.</p> <p> • Gerar leads e vendas: Atraia novos clientes e aumente suas vendas online. </p>' ,
      links: [
        {
          name: 'Conheça sites desenvolvidos',
          href: '/sites-institucionais',
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
