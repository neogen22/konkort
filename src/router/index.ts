import { createRouter, createWebHistory } from 'vue-router'
import KonkortAboutUsServices from '@/components/KonkortAboutUsServices.vue'
import KonkortContacts from '@/components/KonkortContacts.vue'
import KonkortMain from '@/components/KonkortMain.vue'
import KonkortTVPodkluchenie from '@/components/KonkortTVPodkluchenie.vue'
import KonkortTVMain from '@/components/KonkortTVMain.vue'
import KonkortTVChannels from '@/components/KonkortTVChannels.vue'
import KonkortTVAdvertising from '@/components/KonkortTVAdvertising.vue'
import KonkortTVPriceList from '@/components/KonkortTVPriceList.vue'
import KonkortNews from '@/components/KonkortNews.vue'

import KonkortAboutUsAboutUs from '@/components/KonkortAboutUsAboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: KonkortMain
    },
    {
      path: '/about',
      children: [
        {
          path: 'aboutUs',
          name: 'aboutUs',
          component: KonkortAboutUsAboutUs
        },
        {
          path: 'services',
          name: 'services',
          component: KonkortAboutUsServices
        }
      ]
    },
    {
      path: '/tv',
      children: [
        {
          path: '',
          component: KonkortTVMain
        },
        {
          path: 'connect',
          name: 'connect',
          component: KonkortTVPodkluchenie
        },
        {
          path: 'channels',
          name: 'channels',
          component: KonkortTVChannels
        },
        {
          path: 'advertising',
          name: 'advertising',
          component: KonkortTVAdvertising
        },
        { path: 'price-list', name: 'price-list', component: KonkortTVPriceList }
      ]
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* component: () => import('../views/AboutView.vue') */
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: KonkortContacts
    },
    {
      path: '/news',
      name: 'news',
      component: KonkortNews
    }
  ]
})

export default router
