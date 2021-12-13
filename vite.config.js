import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: env.VITE_OPEN_BROWSER === 'true',
      proxy: {
        // https://vitejs.dev/config/#server-proxy
        // '/api': {},
      },
    },
    define: {
      'TITLE': JSON.stringify(env.VITE_TITLE),
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
