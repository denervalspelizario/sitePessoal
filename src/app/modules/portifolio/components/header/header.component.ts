import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


    isMobile: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.isMobile = event.target.innerWidth <= 1150; // Define o breakpoint
    }

    ngOnInit() {
      this.onResize({ target: { innerWidth: window.innerWidth } }); // Verifica a resolução inicial
    }
}
