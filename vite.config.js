import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  // Configure base path for Salesforce static resources
  base: './',
  
  // Build configuration for static resource deployment
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure relative paths for all assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },

  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/assets/*.css',
          dest: 'static/css',
          rename: 'main.css'
        },
        {
          src: 'dist/assets/*.js',
          dest: 'static/js',
          rename: 'main.js'
        },
      ],
      hook: 'closeBundle',
    }),
    {
      name: 'cleanup-css-js-files',
      closeBundle: {
        sequential: true,
        async handler() {
          setTimeout(async () => {
            try {
              const fs = await import('fs/promises');
              const path = await import('path');
              
              const assetsDir = 'dist/assets';
              const files = await fs.readdir(assetsDir);
              
              for (const file of files) {
                if (file.endsWith('.css') || file.endsWith('.js')) {
                  await fs.unlink(path.join(assetsDir, file));
                  console.log(`â Removed ${file} after moving to static/`);
                }
              }
            } catch (error) {
              console.warn('Could not remove .css/.js files:', error.message);
            }
          }, 500);
        }
      }
    }
  ],
})
