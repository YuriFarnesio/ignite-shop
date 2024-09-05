import { styled } from "."

export const Drawer = styled('div', {
  width: 480,
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  position: 'absolute',
  variants: {
    opened: {
      true: {
        right: 0,
      },
      false: {
        right: -480,
      }
    }
  },

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0,0,0,0.8)',
  padding: '4.5rem 3rem 3rem',
  zIndex: 20,
  transition: 'all 0.2s ease-in-out'
})

export const CloseIcon = styled('button', {
  position: 'absolute',
  top: 24,
  right: 24,

  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray500',
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    scale: 1.075,

    svg: {
      color: '$gray300',
    }
  }
})

export const BagContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  gap: '1.5rem',

  h2: {
    fontSize: '$lg',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray100',
    marginBottom: '0.5rem'
  }
})

export const BagItem = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem'
})

export const BagItemImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  }
});

export const BagItemInfosContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '$gray300',
    marginBottom: '0.125rem'
  },

  span: {
    fontSize: '$md',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray100',
    marginBottom: '0.5rem'
  },

  button: {
    width: 'fit-content',

    fontWeight: 700,
    lineHeight: 1.6,
    color: '$green500',

    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      opacity: 0.8
    },
  }
})

export const FinishContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  div: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  button: {
    width: '100%',

    fontSize: '$md',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$white',

    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    cursor: 'pointer',
    padding: '1.25rem',
    marginTop: '1.25rem',
    transition: 'all 0.2s ease-in-out',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})

export const FinishQuantityInfo = styled('p', {
  lineHeight: 1.6,
  color: '$gray100',

  variants: {
    type: {
      value: {
        fontSize: '$md',
      }
    }
  }
})

export const FinishTotalPriceInfo = styled('p', {
  fontWeight: 700,
  color: '$gray100',

  variants: {
    type: {
      title: {
        fontSize: '$md',
        lineHeight: 1.6,
      },
      value: {
        fontSize: '$xl',
        lineHeight: 1.4,
      }
    }
  }
})