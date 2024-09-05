import { styled } from "..";

export const SuccessContainer = styled('main', {
  height: 656,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: 560,
    fontSize: '$xl',
    textAlign: 'center',
    color: '$gray300',
    lineHeight: 1.4,
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  }
});