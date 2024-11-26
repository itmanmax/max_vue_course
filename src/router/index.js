import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import LifecycleAndRefs from '../pages/LifecycleAndRefs.vue'
import WatcherDemo from '../pages/WatcherDemo.vue'
import ComponentDemo from '../pages/ComponentDemo.vue'
import PropsDemo from '../pages/PropsDemo.vue'
import EmitsDemo from '../pages/EmitsDemo.vue'
import SlotDemo from '../pages/SlotDemo.vue'
import SuccessPage from '../pages/SuccessPage.vue'
import ElementDemo from '../pages/ElementDemo.vue'
import ElementPractice from '../pages/ElementPractice.vue'
import ElementBasic from '../pages/ElementBasic.vue'
import ElementEvents from '../pages/ElementEvents.vue'
import ElementLayout from '../pages/ElementLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifecycleAndRefs
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: WatcherDemo
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentDemo
    },
    {
      path: '/props',
      name: 'props',
      component: PropsDemo
    },
    {
      path: '/emits',
      name: 'emits',
      component: EmitsDemo
    },
    {
      path: '/slots',
      name: 'slots',
      component: SlotDemo
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessPage
    },
    {
      path: '/element',
      name: 'element',
      component: ElementDemo
    },
    {
      path: '/element-practice',
      name: 'element-practice',
      component: ElementPractice
    },
    {
      path: '/element-basic',
      name: 'element-basic',
      component: ElementBasic
    },
    {
      path: '/element-events',
      name: 'element-events',
      component: ElementEvents
    },
    {
      path: '/element-layout',
      name: 'element-layout',
      component: ElementLayout
    }
  ]
})

export default router
