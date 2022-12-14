// isProtected: các route cần được bảo vệ
// Có thể thêm giá trị vào đây

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Setting = lazy(() => import('../pages/Setting'));
const Functions = lazy(() => import('../pages/Functions'));
const FunctionFoo = lazy(() => import('../pages/FunctionFoo'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default [
  {
    title: "",
    component: Home,
    path: '/',
    isProtected: true
  },
  {
    title: 'Login Page | Sample App',
    component: Login,
    path: '/login',
    isProtected: false
  },
  {
    title: 'Dashboard | Sample App',
    component: Dashboard,
    path: '/dashboard',
    isProtected: true
  },
  {
    title: 'Setting | Sample App',
    component: Setting,
    path: '/setting',
    isProtected: true
  },
  {
    title: 'Functions',
    component: Functions,
    path: '/functions',
    isProtected: true,
  },
  {
    title: 'Functions',
    component: FunctionFoo,
    path: '/functions/foo',
    isProtected: true
  },
  {
    title: "404 | Sample App",
    component: NotFound,
    path: '/*',
    isProtected: false
  }
]