import { BagIcon, HeaderContainer } from '@/styles/header'
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from "../assets/logo.svg"

export default function Header() {
  const { cartCount, handleCartClick } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>

      <BagIcon onClick={handleCartClick}>
        <Handbag />
        {!!cartCount && <p>{cartCount}</p>}
      </BagIcon>
    </HeaderContainer>
  )
}
