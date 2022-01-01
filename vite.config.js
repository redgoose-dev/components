import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: '/components/',
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: env.VITE_OPEN_BROWSER === 'true',
    },
    define: {
      'TITLE': JSON.stringify(env.VITE_TITLE),
      'AUTHOR': JSON.stringify(env.VITE_AUTHOR),
    },
    build: {
      outDir: 'docs',
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('ext-'),
          },
        },
      }),
    ],
  };
});
