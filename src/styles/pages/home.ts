import Link from "next/link"
import { styled } from ".."

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 1168,
  minHeight: 656,
  display: 'flex',
  overflow: 'initial !important',
  margin: '0 auto',
})

export const ProductContainer = styled('div', {
  borderRadius: 8,
  padding: '0 3rem 0 0',

  '&:last-child': {
    paddingRight: '0',
  },
})

export const Product = styled(Link, {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',
  padding: '0.25rem',

  img: {
    objectFit: 'cover'
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    backgroundColor: 'rgba(32, 32, 32, 0.9)',

    borderRadius: 6,

    transform: 'translateY(110%)',
    opacity: 0,
    padding: '2rem 2.5rem 2rem 2rem',
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      lineHeight: 1.6
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      lineHeight: 1.4,
      color: '$green300'
    },

    div: {
      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    },

    button: {
      width: '3.5rem',
      height: '3.5rem',

      backgroundColor: '$green500',
      border: 0,
      borderRadius: 8,
      cursor: 'pointer',
      padding: '0.75rem',
      transition: 'all 0.2s ease-in-out',

      '& svg': {
        width: '2rem',
        height: '2rem',
        color: '$white',
      },

      '&:hover': {
        scale: 1.025,
        backgroundColor: '$green300',
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})