import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@babel/preset-env', '@babel/preset-react'],
  },

  // Add a rule for handling JSX files with Babel
  esbuild: {
    jsxInject: `import React from 'react';`, // If you're using React JSX syntax
  },
})
