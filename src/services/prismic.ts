

// para instalar o prismic   yarn add @prismicio/client@5.1.0 prismic-dom

import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown){

const prismic = Prismic.client('https://sitepessoal.cdn.prismic.io/api/v2', {
  req,
})

  return prismic;
}