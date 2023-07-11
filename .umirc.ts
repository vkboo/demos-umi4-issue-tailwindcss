import { defineConfig } from "@umijs/max";

export default defineConfig({
  clientLoader: {},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/home',
  //   },
  //   {
  //     name: '首页',
  //     path: '/home',
  //     component: './Home',
  //   },
  //   {
  //     name: '权限演示',
  //     path: '/access',
  //     component: './Access',
  //   },
  //   {
  //     layout: false,
  //     name: ' CRUD 示例',
  //     path: '/table',
  //     component: './Table',
  //     wrappers: [
  //       '@/components/Auth'
  //     ]
  //   },
  //   {
  //     name: 'News',
  //     path: '/News',
  //     component: '@/pages/News',
  //     routes: [
  //       { path: '*', component: '@/pages/News/$' }
  //     ]
  //   }
  // ],
  npmClient: "yarn",
  tailwindcss: {},
});
