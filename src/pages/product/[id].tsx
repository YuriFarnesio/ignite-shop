import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { TProduct } from "@/types/products"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

interface ProductProps {
  product: TProduct
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image width={520} height={480} src={product.imageUrl} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price / 100)
            }
          </span>
          <p>{product.description}</p>

          <button onClick={() => addItem(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_Qmw3YGN25A9ny6' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  if (!productId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        sku: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        price: price.unit_amount as number,
        currency: 'BRL'
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}