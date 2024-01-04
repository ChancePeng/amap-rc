import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'amap-rc',
    footer: 'power by change',
    logo: '/amap-rc/logo.png',
  },
  links: [{ href: '/logo.png', rel: 'shortcut icon' }],
  publicPath: '/amap-rc/',
  base: '/amap-rc',
});
