<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from './components/ui/button'
import { ref } from 'vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
let activeButtonAbout = ref(false)
let activeButtonTV = ref(false)
let activeButtonContacts = ref(false)
</script>

<template>
  <div class="container mx-auto place-items-center max-w-5xl mt-6">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><p class="w-[200px]">О КОМПАНИИ</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid">
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
        <NavigationMenuItem>
          <NavigationMenuTrigger><p class="w-[200px]">ТЕЛЕВИДЕНИЕ</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="one m-0 grid list-none gap-x-[10px] p-[22px]">
              <li><p class="w-[250px] text-center title='Услуги'">Как подключиться</p></li>
              <NavigationMenuLink
                ><p class="w-[250px] text-center title='Услуги'">
                  Оборудование
                </p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="w-[250px] text-center title='Услуги'">Каналы</p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="w-[250px] text-center title='Услуги'">
                  Настройка телеканалов
                </p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="w-[250px] text-center title='Услуги'">
                  Прейскурант на услуги
                </p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="w-[250px] text-center title='Услуги'">
                  Реклама на ТВ
                </p></NavigationMenuLink
              >
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem> Новости </NavigationMenuItem>
        <NavigationMenuItem> Видеоновости </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <RouterView></RouterView>
  </div>
  <!-- <div class="container mx-auto place-items-center max-w-5xl mt-6">
    <div class="grid grid-cols-2 gap-2 lg:grid-cols-6 md:grid-cols-3">
      <Button
        :class="{ anime: activeButtonAbout }"
        @click="
          () => {
            activeButtonAbout = true
            activeButtonTV = false
            activeButtonContacts = false
            $router.push('/about')
          }
        "
        >О КОМПАНИИ</Button
      >
      <Button>НОВОСТИ</Button>
      <Button>ВИДЕОНОВОСТИ</Button>
      <Button
        :class="{ anime: activeButtonTV }"
        @click="
          () => {
            activeButtonAbout = false
            activeButtonTV = true
            activeButtonContacts = false
            $router.push('/tv')
          }
        "
        >ТЕЛЕВИДЕНИЕ</Button
      >
      <Button>&nbsp;&nbsp;&nbsp;&nbsp;АБОНЕНТАМ&nbsp;&nbsp;&nbsp;</Button>
      <Button
        :class="{ anime: activeButtonContacts }"
        @click="
          () => {
            activeButtonAbout = false
            activeButtonTV = false
            activeButtonContacts = true
            $router.push('/contacts')
          }
        "
        >КОНТАКТЫ</Button
      >
    </div>
    <RouterView></RouterView>
  </div> -->
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
</style>
