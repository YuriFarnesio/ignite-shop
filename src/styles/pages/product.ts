import { styled } from "..";

export const ProductContainer = styled('main', {
  width: '100%',
  maxWidth: 1168,

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  margin: '0 auto'
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
    marginTop: '1rem',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginTop: '2.5rem',
  },

  button: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    cursor: 'pointer',
    padding: '1.25rem',
    marginTop: 'auto',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '$green300',
    }
  },
})