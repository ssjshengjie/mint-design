import { createRouter, createWebHistory, Router } from "vue-router";
import routes from './modules'
export const router: Router = createRouter({
    history:createWebHistory(),
    routes
  });