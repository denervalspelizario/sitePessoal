import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Adicione o código para rolagem suave aqui
document.addEventListener('DOMContentLoaded',  
  () => {
  // pegando todos so links
   const linksMenu = document.querySelectorAll('.menu-links a');

   linksMenu.forEach(link => {
     link.addEventListener('click', (event) => {
       event.preventDefault();
       const id = link.getAttribute('href');

       if (id) { // Verifica se o ID existe
         const section = document.querySelector(id);

         if (section) { // Verifica se a seção foi encontrada
           section.scrollIntoView({
             behavior: 'smooth' // scrolla de modo devagar
           });
         }
       }
     });
   });
 });
