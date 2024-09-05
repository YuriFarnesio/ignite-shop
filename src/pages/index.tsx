import { stripe } from '@/lib/stripe'
import { HomeContainer, Product, ProductContainer } from '@/styles/pages/home'
import { TProduct } from '@/types/products'
import { Handbag } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MouseEvent } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: TProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: () => products.map((_, i) => {
      return {
        size: 0.64,
        origin: i < (products.length - 1) ? 0 : 0.32,
      }
    }),
  })

  const handleAddToBag = (event: MouseEvent, product: TProduct) => {
    event.preventDefault()
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <ProductContainer key={product.id} className="keen-slider__slide">
            <Product href={`/product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {
                      new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(product.price / 100)
                    }
                  </span>
                </div>

                <button onClick={(e) => handleAddToBag(e, product)}>
                  <Handbag />
                </button>
              </footer>
            </Product>
          </ProductContainer>
        ))}
      </HomeContainer>
    </>
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
      sku: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      price: price.unit_amount as number,
      currency: 'BRL'
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}