import { ReactElement, cloneElement } from "react";
import Link, {LinkProps} from "next/link";  
import { useRouter } from "next/router"; // pegando a biblioteca de rotas


// LinkProps é uma interface para personalizar um link de roteamento dentro do Next.js.

interface  ActiveLinkProps extends LinkProps {      

  children: ReactElement; // children será um elemento react( toda estrutura de react ) 
  activeClassName: string;  // className sendo tipado como string

}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps){ // activeLink recebendo interface ActiveLinkProps + LinkProps

  const { asPath } = useRouter(); //  extraindo a rota atual da página usando a função useRouter() e armazenando-a na variável asPath.
                                  // ou seja asPath é uma propriedade que representa a parte da URL que vem após o nome do domínio. 

  const className = asPath === rest.href ? activeClassName : ''; // se asPath(rota da url) for igual a resthref( rota atual(pagina que se está)) então 
                                                                 // chama a activeclassname(ela fica true) que ativa la no style.module  senão não faz nada  

  return(
    <Link {...rest}>
      { cloneElement(children, {
        className
      })}
    </Link>
  )
}