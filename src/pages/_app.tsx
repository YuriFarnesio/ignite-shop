import { CarouselShadow, Container, Header } from '@/styles/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from "../assets/logo.svg"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CarouselShadow side='left' />
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
      <CarouselShadow side='right' />
    </Container>
  )
}
