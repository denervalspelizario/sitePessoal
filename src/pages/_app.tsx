
import { AppProps } from 'next/app';
import '../styles/global.scss';
import { Header } from '../components/Header';

// comando para instalar o prismic   yarn add @prismicio/client@5.1.0 prismic-dom


function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <>
    <Header/>
    <Component  {...pageProps} />
  </>
  )
}

export default MyApp
