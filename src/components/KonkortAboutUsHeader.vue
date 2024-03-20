<script setup lang="ts">
import { Button } from './ui/button'
import { RouterLink, RouterView } from 'vue-router'
import { ref, shallowRef } from 'vue'
import KonkortAboutUsAboutUs from './KonkortAboutUsAboutUs.vue'
import KonkortAboutUsUslugi from './KonkortAboutUsUslugi.vue'
import KonkortLicenses from './KonkortLicenses.vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from '@/components/ui/navigation-menu'

let aboutUsButtonResult = shallowRef(KonkortAboutUsAboutUs)
let firstButton = ref(true)
let secondButton = ref(false)
let thirdButton = ref(false)
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger><p class="w-[200px]">О КОМПАНИИ</p></NavigationMenuTrigger>
        <NavigationMenuContent class="grid">
          <ul>
            <NavigationMenuLink
              ><p
                class="w-[250px] text-center title='О нас'"
                @click="$router.push(`/tv/advertising`)"
              >
                О нас
              </p></NavigationMenuLink
            >
            <NavigationMenuLink
              ><p class="w-[250px] text-center title='Услуги'">Услуги</p></NavigationMenuLink
            >
            <NavigationMenuLink
              ><p class="w-[250px] text-center title='Лицензии'">Лицензии</p></NavigationMenuLink
            >
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  <RouterView></RouterView>
  <!-- 
  <div class="flex flex-row gap-4">
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortAboutUsAboutUs
          firstButton = true
          secondButton = false
          thirdButton = false
        }
      "
      :class="{ anime: firstButton }"
      >О нас</Button
    >
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortAboutUsUslugi
          firstButton = false
          secondButton = true
          thirdButton = false
        }
      "
      :class="{ anime: secondButton }"
      >Услуги</Button
    >
    <Button
      @click="
        () => {
          aboutUsButtonResult = KonkortLicenses
          firstButton = false
          secondButton = false
          thirdButton = true
        }
      "
      :class="{ anime: thirdButton }"
      >Лицензии</Button
    >
  </div> -->
  <div class="mt-7">
    <component :is="aboutUsButtonResult"></component>
  </div>
</template>
<style scoped>
.anime {
  text-align: center;
  outline: 3px rgba(18, 222, 218, 0.895) solid;
  animation: test 1s infinite;
}
@keyframes test {
  25% {
    outline-color: rgba(18, 222, 218, 0.895);
  }
  50% {
    outline-color: rgba(91, 247, 244, 0.895);
  }
  75% {
    outline-color: rgba(232, 242, 242, 0.895);
  }
}
p {
  font-family: 'Roboto';
}
</style>
