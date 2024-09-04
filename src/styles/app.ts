import { styled } from "."


export const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  overflow: 'hidden',
})

export const Header = styled('header', {
  width: '100%',
  maxWidth: 1168,
  padding: '2.5rem 0 2rem',
  margin: '0 auto',
})

export const CarouselShadow = styled('div', {
  width: 'calc((100vw - 1168px) / 2)',
  height: '100vh',

  position: 'absolute',
  top: 0,
  bottom: 0,

  zIndex: 10,

  variants: {
    side: {
      left: {
        left: 0,
        background: 'linear-gradient(90deg, #121214ff 0%, #12121400 100%)',
      },
      right: {
        right: 0,
        background: 'linear-gradient(90deg, #12121400 0%, #121214ff 100%)',
      }
    }
  }
})