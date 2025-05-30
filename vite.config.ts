import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr({
    svgrOptions: {
      exportType: "default",
      ref: true,
      svgo: true,
      titleProp: true,
    },
    include: "**/*.svg",
  })],
  
})
