import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'AI与我',
  },
  clientLoader: {},
  exportStatic: {},
  base: '/ai/',
  ignoreMomentLocale: true,
  publicPath: '/ai/',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'AI制作',
      path: '/ai',
      component: './Ai/Ai',
    },
    {
      name: '短视频库',
      path: '/video',
      component: './Video',
    },
    {
      name: '简历库',
      path: '/resume',
      component: './Resume',
    },
  ],
  analytics: {
    ga_v2: 'G-QTKV715HW0', // google analytics 的 key (GA 4)
  },
  npmClient: 'yarn',
});

