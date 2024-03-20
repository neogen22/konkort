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
      <NavigationMenuList class="">
        <NavigationMenuItem>
          <NavigationMenuTrigger><p class="w-[180px]">О КОМПАНИИ</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-max">
              <NavigationMenuLink
                ><p
                  class="text-center title='О нас' w-[230px]"
                  @click="$router.push(`/tv/advertising`)"
                >
                  О нас
                </p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="text-center title='Услуги' w-[230px]">Услуги</p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p class="text-center title='Лицензии' w-[230px]">Лицензии</p></NavigationMenuLink
              >
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          class="w-[228px] group inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          ><p>НОВОСТИ</p></NavigationMenuItem
        >
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger><p class="w-[180px]">ТЕЛЕВИДЕНИЕ</p></NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="">
                <li>
                  <p class="text-center title='Как подключиться' w-[230px]">Как подключиться</p>
                </li>
                <NavigationMenuLink
                  ><p class="text-center title='Оборудование' w-[230px]">
                    Оборудование
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p class="text-center title='Каналы' w-[230px]">Каналы</p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p class="text-center title='Настройка телеканалов' w-[230px]">
                    Настройка телеканалов
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p class="text-center title='Прейскурант на услуги' w-[230px]">
                    Прейскурант на услуги
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p class="text-center title='Реклама на ТВ' w-[230px]">
                    Реклама на ТВ
                  </p></NavigationMenuLink
                >
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem
            class="w-[228px] group inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            ><p>КОНТАКТЫ</p></NavigationMenuItem
          >
        </NavigationMenu>
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
