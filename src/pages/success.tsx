import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  costumerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
          <Image src={products[0].imageUrl} width={120} height={110} alt="" />
        </ImageContainer>

        {products.length > 1 ? (
          <p>
            Uhuul <strong>{costumerName}</strong>, seus produtos já estão a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{costumerName}</strong>, sua <strong>{products[0].name}</strong>{' '}
            já está a caminho da sua casa.
          </p>
        )}

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details?.name;
  const products = session.line_items?.data.map(line => {
    const product = line.price?.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0]
    }
  });

  return {
    props: {
      costumerName,
      products
    }
  }
}