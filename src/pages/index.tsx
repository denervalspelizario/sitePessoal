import Head from "next/head"
import styles from '../styles/home.module.scss'

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

      </main>
    </>
  )
}

