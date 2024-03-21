<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
</script>

<template>
  <div class="container mx-auto place-items-center max-w-5xl mt-6">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger @click="$router.push('/')"
            ><p class="w-[180px]">О КОМПАНИИ</p></NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <ul class="grid w-max">
              <NavigationMenuLink
                ><p
                  class="text-center w-[230px] text-base p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition ease-in-out delay-150"
                  @click="$router.push(`/about/aboutUs`)"
                >
                  О нас
                </p></NavigationMenuLink
              >

              <NavigationMenuLink
                ><p class="text-center title='Лицензии' w-[230px]">Лицензии</p></NavigationMenuLink
              >
              <NavigationMenuLink
                ><p
                  class="text-center w-[230px] text-base p-2 cursor-pointer transition ease-in-out delay-150 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  @click="$router.push('/about/services')"
                >
                  Услуги
                </p></NavigationMenuLink
              >
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          class="w-[228px] group inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer"
          ><p>НОВОСТИ</p></NavigationMenuItem
        >
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger @click="$router.push('/tv')"
              ><p class="w-[180px]">ТЕЛЕВИДЕНИЕ</p></NavigationMenuTrigger
            >
            <NavigationMenuContent>
              <ul class="">
                <li>
                  <p
                    class="text-center w-[230px] text-base p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition ease-in-out delay-150"
                    @click="$router.push('/tv/connect')"
                  >
                    Как подключиться
                  </p>
                </li>
                <NavigationMenuLink
                  ><p class="text-center w-[230px]">Оборудование</p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p
                    class="text-center w-[230px] text-base p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition ease-in-out delay-150"
                    @click="$router.push('/tv/channels')"
                  >
                    Каналы
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p class="text-center title='Настройка телеканалов' w-[230px]">
                    Настройка телеканалов
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink
                  ><p
                    class="text-center w-[230px] text-base p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition ease-in-out delay-150"
                    @click="$router.push('/tv/price-list')"
                  >
                    Прейскурант на услуги
                  </p></NavigationMenuLink
                >
                <NavigationMenuLink @click="$router.push('/tv/advertising')"
                  ><p
                    class="text-center w-[230px] text-base p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none transition ease-in-out delay-150"
                  >
                    Реклама на ТВ
                  </p></NavigationMenuLink
                >
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem
            @click="$router.push('/contacts')"
            class="w-[228px] group inline-flex h-10 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none cursor-pointer"
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
p {
  font-family: 'Roboto';
}
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
