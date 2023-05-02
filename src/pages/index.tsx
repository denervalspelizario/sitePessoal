import Head from "next/head"
import styles from '../styles/home.module.scss'

import Image from 'next/image'

import techImage from '../../public/images/techs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Denerval - Front-End Developer</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          
          <section className={styles.ctaText}>
            <h1>Levando você ao proximo nível!</h1>
            <p>Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto</p>
            
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
            
          </section>
          <img src="/images/banner-conteudos.png" alt="" />  
        </div>

        <hr  className={styles.divisor}/>

        <div className={styles.sectionConteudo}>
          <section>
            <h2>Aprenda criar aplicativos para Android e IoS</h2>
            <span>Voce vai descobrir o jeito mais moderno de denvolvedor apps nativos para IOS e Android, </span>
          </section>

          <img src="/images/financasApp.png" alt="desenvolvimento de apps" />
        </div>

        <hr  className={styles.divisor}/>

        <div className={styles.sectionConteudo}>
          
          <img src="/images/webDev.png" alt="desenvolvimento de aplicações web" />

          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado. </span>
          </section>

        </div>

        <div className={styles.nextLevelContent}>
          <Image 
            quality={100}  // usando recurso do next para manter a qualidade maxima possivel 100% 
            src={techImage}  
            alt="Tecnologias"
          />

          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nivel</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>

          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>

      </main>
    </>
  )
}

