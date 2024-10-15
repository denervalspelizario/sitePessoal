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
      src: '../../../../../assets/baiao-rockbar/baiao-logo.png',
      alt: 'logo do site baiao-rock-bar',
      description: 'Sinta a energia do rock no Baião, o melhor rock bar de João Pessoa! 🤘',
      title: 'Baião Rock Bar',
      route: '#'
    },



  ]);


}
