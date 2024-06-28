import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [  // 페이지 정보들
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes  // routes: routes
})

export default router
// 라우터객테(페이지 이동할 수 있게 해주는)를 외부에서 사욜할 수 있도록