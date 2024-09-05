import {
  BagContainer,
  BagItem,
  BagItemImageContainer,
  BagItemInfosContainer,
  CloseIcon,
  Drawer,
  FinishContainer,
  FinishQuantityInfo,
  FinishTotalPriceInfo
} from '@/styles/bag-drawer'
import { X } from '@phosphor-icons/react'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'

export default function BagDrawer() {
  const ref = useRef<HTMLDivElement>(null);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
    handleCartClick,
    decrementItem
  } = useShoppingCart()

  const cartList = !!cartDetails  && Object.values(cartDetails).reduce(
    (acc, product) => {
      const productList = Array(product.quantity).fill(product)
      return [...acc, ...productList]
    },
    [] as CartEntry[]
  )

  const handleBuyButton = async() => {
    if (!cartCount) {
      return alert('Sem itens no carrinho!')
    }

    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: cartList,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    } finally {
      setIsCreatingCheckoutSession(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleCartClick()
      }
    };

    if (!shouldDisplayCart) {
      return
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [shouldDisplayCart, handleCartClick]);

  return (
    <Drawer ref={ref} opened={shouldDisplayCart}>
      <CloseIcon onClick={handleCartClick}>
        <X />
      </CloseIcon>

      <BagContainer>
        <h2>Sacola de compras</h2>

        {!!cartList &&
          cartList.map((product, productIndex) => (
            <BagItem key={`${product.id}_${productIndex}`}>
              <BagItemImageContainer>
                <Image width={102} height={93} src={product.imageUrl} alt="" />
              </BagItemImageContainer>

              <BagItemInfosContainer>
                <p>{product.name}</p>
                <span>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price / 100)
                  }
                </span>

                <button onClick={() => decrementItem(product.id)}>Remover</button>
              </BagItemInfosContainer>
            </BagItem>
          )
        )}
      </BagContainer>

      <FinishContainer>
        <div>
          <FinishQuantityInfo>Quantidade</FinishQuantityInfo>
          <FinishQuantityInfo type='value'>
            {cartCount} itens
            </FinishQuantityInfo>
        </div>

        <div>
          <FinishTotalPriceInfo type='title'>Valor total</FinishTotalPriceInfo>
          <FinishTotalPriceInfo type='value'>
            {
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalPrice as number / 100)
            }
          </FinishTotalPriceInfo>
        </div>

        <button disabled={!cartCount || isCreatingCheckoutSession} onClick={handleBuyButton}>
          Finalizar compra
        </button>
      </FinishContainer>
    </Drawer>
  )
}
