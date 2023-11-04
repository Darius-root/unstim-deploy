import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // for React, Vue and Svelte

// Create an instance of Notyf
export const notyf = new Notyf({
  duration: 3000,
  types: [
    {
      type: 'error',
      className: 'text-sm'
    },

    {
      type: 'success',
      className: 'text-sm w-full',
      position: {
        x: 'right',
        y: 'bottom'
      }
    }
  ],
  position: {
    x: 'right',
    y: 'top'
  }
})
