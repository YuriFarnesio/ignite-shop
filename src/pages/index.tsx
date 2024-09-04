import { HomeContainer, Product, ProductContainer } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/4.png'
import camiseta5 from '../assets/camisetas/5.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: () => Array.from({ length: 5 }, (_, i) => {
      return {
        size: 0.64,
        origin: i < 5 -1 ? 0 : 0.32,
      }
    }),
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <ProductContainer className="keen-slider__slide">
        <Product>
          <Image src={camiseta1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </ProductContainer>

      <ProductContainer className="keen-slider__slide">
        <Product>
          <Image src={camiseta2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </ProductContainer>

      <ProductContainer className="keen-slider__slide">
        <Product>
          <Image src={camiseta3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </ProductContainer>

      <ProductContainer className="keen-slider__slide">
        <Product>
          <Image src={camiseta4} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </ProductContainer>

      <ProductContainer className="keen-slider__slide">
        <Product>
          <Image src={camiseta5} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </ProductContainer>
    </HomeContainer>
  )
}
