import { Component, signal } from '@angular/core';
import { IProjetosAng } from '../../interface/IProjetosAngInterface';

@Component({
  selector: 'app-sites-intitucionais',
  templateUrl: './sites-intitucionais.component.html',
  styleUrl: './sites-intitucionais.component.scss'
})
export class SitesIntitucionaisComponent {

  public arrayProjetos = signal<IProjetosAng[]>([
    {
      src: '../../../../../assets/logos-institucionais/baiao-logo.png',
      alt: 'logo do site baiao-rock-bar',
      description: 'Sinta a energia do rock no Baião, o melhor rock bar de João Pessoa! 🤘',
      title: 'Baião Rock Bar',
      tecnology: 'Nextjs, React e Firebase',
      route: 'https://baiao-rock-club.vercel.app'
    },
    {
      src: '../../../../../assets/logos-institucionais/zeus-adivogados.png',
      alt: 'logo do site de advocacia',
      description: 'Defendemos seus direitos com compromisso e excelência',
      title: 'Zeus Advocacia',
      tecnology: 'Wordpress, Elementor e Royal Elementor ',
      route: 'https://wp-pages.denerdev.com.br/site-advocacia/'
    },



  ]);


}
