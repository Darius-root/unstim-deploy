import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'

// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx()
//     // ElementPlus({
//     //   useSource: true
//     // })
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig(({ mode }) => {
  Object.assign(process.env, process.env, loadEnv(mode, process.cwd(), ''))
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }

    // server: {
    //   proxy: {
    //     '/api': {
    //       target: process.env.VITE_API_BASE_URL,
    //       changeOrigin: true,
    //       secure: false
    //       // rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
})
