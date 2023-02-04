import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { wrapperEnv } from './src/utils/getEnv';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';

const fn = (mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);

  return {
    // base: "/",
    // alias config
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          // 	"primary-color": "#1DA57A",
          // },
          javascriptEnabled: true,
          additionalData: `@import "@/styles/global.less";`
        }
      }
    },
    // server config
    server: {
      host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // https: false,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
        '/api': {
          target: 'https://www.fastmock.site/mock/d6f0134049a0e22b01d7aae6fafc9045', // easymock
          changeOrigin: true
          // rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    // plugins
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_GLOB_APP_TITLE
          }
        }
      }),
      // * EsLint 报错信息显示在浏览器界面上
      eslintPlugin(),
      // * 是否生成包预览(包文件过大，进行打包分析以此优化)
      viteEnv.VITE_REPORT && (visualizer({ filename: 'stats.html', open: true }) as PluginOption),
      // * gzip compress压缩
      viteEnv.VITE_BUILD_GZIP &&
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz'
        })
    ],
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    // build configure
    build: {
      outDir: 'dist',
      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: 'esbuild',
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  };
};
// @see: https://vitejs.dev/config/
export default defineConfig(fn);
