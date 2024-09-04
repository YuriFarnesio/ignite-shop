import { stripe } from '@/lib/stripe'
import { HomeContainer, Product, ProductContainer } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: () => products.map((_, i) => {
      return {
        size: 0.64,
        origin: i < (products.length - 1) ? 0 : 0.32,
      }
    }),
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <ProductContainer key={product.id} className="keen-slider__slide">
          <Product>
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </ProductContainer>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}