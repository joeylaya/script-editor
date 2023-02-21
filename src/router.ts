import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ScriptEditor from './views/ScriptEditor.vue'

const routes: RouteRecordRaw[] = [
  { path: '/script', component: ScriptEditor }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
