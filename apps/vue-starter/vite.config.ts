import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('ix-'),
          },
        },
      }),
    ],
    server: {
      port: Number.parseInt(env.VITE_PORT || '3200'),
      open: true,
    },
  };
});
