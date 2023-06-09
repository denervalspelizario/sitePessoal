
import Image from 'next/image'; // importando Image que trata imagens no next
import Logo from '../../../public/images/logo.svg'
import styles from './style.module.scss'

import { ActiveLink } from '../ActiveLink'; // importando o component activeLink que será responsável pelas rotas e de ativar os link quando pagina estiver ativa



export  function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerConteudo}>

        <ActiveLink href="/" 
          activeClassName={styles.active} // linkando a estilização ao active, os elementos dentro do paragrafos são estilizados normalmente dentro de style.module 
        >
          <p>
            <Image src={Logo} alt='Programador Logo' />
          </p>
        </ActiveLink>
       
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <p>Home</p>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <p>Conteúdos</p>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <p>Quem somos?</p>
          </ActiveLink>
        </nav>

        
        <a type='button' className={styles.btnHeader}  href="">Começar</a>

      </div>
    </header>
  )
}

