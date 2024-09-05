import BagDrawer from '@/components/bag-drawer'
import Header from '@/components/header'
import { CarouselShadow, Container } from '@/styles/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      currency="BRL"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      shouldPersist
    >
      <Container>
        <CarouselShadow side='left' />

        <Header />
        <BagDrawer />
        <Component {...pageProps} />

        <CarouselShadow side='right' />
      </Container>
    </CartProvider>
  )
}
