import { styled } from "."

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: 1168,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2.5rem 0 2rem',
  margin: '0 auto',
})

export const BagIcon = styled('button', {
  width: '3rem',
  height: '3rem',

  position: 'relative',

  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 8,
  cursor: 'pointer',
  padding: '0.75rem',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray500',
  },

  p: {
    width: '1.5rem',
    height: '1.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$white',

    position: 'absolute',
    top: '-0.75rem',
    right: '-0.75rem',
    boxSizing: 'content-box',

    backgroundColor: '$green500',
    border: '3px solid $gray900',
    borderRadius: '100%'
  },

  '&:hover': {
    scale: 1.05,
    opacity: 0.8
  }
})