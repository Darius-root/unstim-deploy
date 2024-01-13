import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'unstim-white': '#FFFFFF',
        'unstim-primary': '#0075FF',
        'unsitm-primary-pan': '#05FF00',
        'unstim-info': '#0dcaf0',
        'unstim-black': '#000000',
        'unstim-black-pan': '#1C1B1F',
        'unstim-light': '#f4f4f4',
        'unstim-gray': 'rgba(253, 253, 252, 1)'
      },
      boxShadow: {
        'unstim-shadow': '0px 0px 23px 1px rgba(0, 0, 0, 0.15)',
        input: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
        btn: '-6px -5px 3px white, 3px 4px 5px rgba(0, 0, 0, 0.25)',
        card: '1px 1px 10px rgba(0, 0, 0, 0.2)'
      },
      backgroundImage: {
        'unstim-gradient': 'linear-gradient(90deg, #61d0ff, #0075ff)'
      }
    },

    animation: {
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
      slideDown: 'slideDown 300ms ease',
      slideUp: 'slideUp 300ms ease',
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      overlayClose: 'overlayClose 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentClose: 'contentClose 150ms cubic-bezier(0.16, 1, 0.3, 1)'
    },

    keyframes: {
      overlayShow: {
        from: { opacity: '0' },
        to: { opacity: '1' }
      },
      contentShow: {
        from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
      },

      overlayClose: {
        to: { opacity: '0' },
        from: { opacity: '1' }
      },
      contentClose: {
        to: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        from: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
      },

      slideDown: {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' }
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' }
      },
      enterFromRight: {
        from: { opacity: '0', transform: 'translateX(200px)' },
        to: { opacity: '1', transform: 'translateX(0)' }
      },
      enterFromLeft: {
        from: { opacity: '0', transform: 'translateX(-200px)' },
        to: { opacity: '1', transform: 'translateX(0)' }
      },
      exitToRight: {
        from: { opacity: '1', transform: 'translateX(0)' },
        to: { opacity: '0', transform: 'translateX(200px)' }
      },
      exitToLeft: {
        from: { opacity: '1', transform: 'translateX(0)' },
        to: { opacity: '0', transform: 'translateX(-200px)' }
      },
      scaleIn: {
        from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
        to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' }
      },
      scaleOut: {
        from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' }
      },
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' }
      },
      fadeOut: {
        from: { opacity: '1' },
        to: { opacity: '0' }
      }
    }
  },
  plugins: []
} satisfies Config
