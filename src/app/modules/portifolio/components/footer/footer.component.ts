import { Component, signal } from '@angular/core';
import { IRedesSociais } from '../../interface/IRedesSociaisInterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  // array que conten os icones
  public iconesRedesSociais = signal<IRedesSociais[]>([
    {
      src: '../../../../../assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/denervalpelizariodev/',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: '../../../../../assets/icons/whatsapp.svg',
      link: 'https://api.whatsapp.com/send?phone=5511940124694&text=Ol%C3%A1%20Dener,%20preciso%20de%20um%20orçamento!',
      alt: 'Ícone de conhecimento de css3',
    },

  ]);

}
