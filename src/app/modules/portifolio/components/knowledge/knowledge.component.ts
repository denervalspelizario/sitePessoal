import { Component, signal } from '@angular/core';

// Interface que tipa arruya de icones
import { IKnowledge } from '../../interface/IknowledgeInterface';
import { AppComponent } from './../../../../app.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  // array que conten os icones
  public iconesConhecimento = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: '../../../../../assets/icons/c-sharp.svg',
      alt: 'Ícone de conhecimento do .net',
    },
    {
      src: '../../../../../assets/icons/react-native.svg',
      alt: 'Ícone de conhecimento do react-native',
    },
  ]);
}
