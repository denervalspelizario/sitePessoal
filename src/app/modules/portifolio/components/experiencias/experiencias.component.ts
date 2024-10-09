import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiencesInterface';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {

  //Array com os dados de experiecia
  public arrayExperiecia = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Freelancer',
        p: 'Freelancer | Set 2024 - Atual',
      },
      text: '<p>Desenvolvo experiências web personalizadas como freelancer, criando landing pages e sites institucionais com foco na usabilidade e na performance. Utilizo tecnologias como HTML, CSS, TypeScript, Angular, C#, .NET e WordPress para construir interfaces intuitivas e eficazes, que atendam às necessidades de cada cliente.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Back-End',
        p: 'Programador.TV | Jun 2024 - Out 2024',
      },
      text: '<p>• Desenvolvimento em Clean Architecture: Aplicação de princípios de Clean Architecture para garantir a separação de responsabilidades e facilitar a manutenção e escalabilidade do código.</p> <p>• Aplicações Razor Page: Desenvolvimento de aplicações web utilizando Razor Page e .NET 8, focando em uma experiência de usuário rica e interativa.</p> <p>• Abordagem Ágil: Trabalho em equipes ágeis com quadro Kanban.</p> <p>• Desenvolvimento em Clean Architecture: Aplicação de princípios de Clean Architecture para garantir a separação de responsabilidades e facilitar a manutenção e escalabilidade do código.</p> <p>• Desenvolvimento de testes unitários e de integração utilizando xUnit para garantir a qualidade e a confiabilidade de métodos e endpoints de APIs REST.</p>',
    }

    /*

• Refatoração de Código: Melhoria da base de código existente para um software em Clean Architecture.
• Filas RabbitMQ: Implementação de filas RabbitMQ para comunicação assíncrona entre serviços, garantindo escalabilidade e confiabilidade.
• Aplicações Razor Page: Desenvolvimento de aplicações web utilizando Razor Page e .NET 8, focando em uma experiência de usuário rica e interativa.
• Ambiente Cloud: Implantação e gerenciamento de aplicações em ambientes cloud, utilizando as melhores práticas de DevOps e CI/CD.
• Abordagem Ágil: Trabalho em equipes ágeis com quadro Kanban.
• Desenvolvimento em Clean Architecture: Aplicação de princípios de Clean Architecture para garantir a separação de responsabilidades e facilitar a manutenção e escalabilidade do código.




    */
  ]);
}
