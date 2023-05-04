
import styles from './style.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import thumbImg from '../../../public/images/thumb.png'
import { FiChevronLeft, FiChevronsLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi'


export default function Posts(){
  return(
    <>
      <Head>
         <title>Blog | Denerval Front-End</title> 
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
         
          <Link href="/">
            <div className={styles.containerLink}>
              <Image 
                src={thumbImg}
                alt="Post titulo 1"
                width={720}
                height={410} 
                quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 JULHO 2021</time>
              <p>Hoje vamos criar o controle de mostrar a senha no input, um aopção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
            </div>
          </Link>

          <Link href="/">
            <div className={styles.containerLink}>
              <Image 
                src={thumbImg}
                alt="Post titulo 1"
                width={720}
                height={410} 
                quality={100}
                style={{marginTop: '5rem'}}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 JULHO 2021</time>
              <p>Hoje vamos criar o controle de mostrar a senha no input, um aopção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
            </div>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronLeft size={25} color='#FFF'/>
              </button>
              <button>
                <FiChevronLeft size={25} color='#FFF'/>
              </button>
            </div>


            <div>
              <button>
                <FiChevronsRight size={25} color='#FFF'/>
              </button>
              <button>
                <FiChevronsRight size={25} color='#FFF'/>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}