<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar'

import router from './router'
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Prata&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <body
    class="container mx-auto place-items-center max-w-2xl mt-6 lg:max-w-4xl grid-cols-4 border-0 xxx"
  >
    <Menubar
      class="container mx-auto max-w-2xl mt-6 lg:max-w-4xl grid-cols-2 border-0 md:grid-cols-4 h-14 md:h-8 gap-x-5 mb-8 Menubar"
    >
      <div class="rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10">
        <MenubarMenu>
          <MenubarTrigger class="cursor-pointer w-[140px] md:w-[140px] lg:w-[165px] h-10"
            ><p class="w-[140px] md:w-[140px] lg:w-[165px] h-10 pt-[10px]">
              НОВОСТИ
            </p></MenubarTrigger
          >
        </MenubarMenu>
      </div>
      <div class="rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10">
        <MenubarMenu>
          <MenubarTrigger
            class="cursor-pointer w-[140px] md:w-[140px] lg:w-[165px] h-10 align-middle MenubarTrigger"
            @click="$router.push('/contacts')"
            ><p class="w-[140px] md:w-[140px] lg:w-[165px] h-10 pt-[10px] selection:text-black">
              КОНТАКТЫ
            </p></MenubarTrigger
          >
        </MenubarMenu>
      </div>
      <MenubarMenu>
        <MenubarTrigger
          class="cursor-pointer rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10 p-0 MenubarTrigger"
          id="box"
          ><div class="flex place-items-center">
            <p class="w-[140px] md:w-[140px] lg:w-[165px] h-10 p-0 pt-[10px]">ТЕЛЕВИДЕНИЕ</p>
            <svg
              class="ml-[-18px] md:ml-[-14px] lg:ml-[-28px]"
              width="15px"
              height="24px"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
              />
            </svg></div
        ></MenubarTrigger>

        <MenubarContent alignOffset="5" class="MenubarContent">
          <MenubarItem
            inset
            @click="router.push('/tv/connect')"
            class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1">
              Как подключиться
            </p></MenubarItem
          >
          <MenubarSeparator />
          <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            ><p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer">
              Оборудование
            </p>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            inset
            @click="$router.push('/tv/channels')"
            class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1">Телеканалы</p>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]"
            ><p
              class="text-center w-[140px] md:w-[140px] lg:w-[165px] pt-1 cursor-pointer h-12 lg:h-7"
            >
              Настройка телеканалов
            </p>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem
            inset
            @click="$router.push('/tv/price-list')"
            class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-12 pt-1 lg:h-7">
              Прейскурант на услуги
            </p></MenubarItem
          >
          <MenubarSeparator />
          <MenubarItem
            inset
            @click="$router.push('/tv/advertising')"
            class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1">Реклама на ТВ</p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          class="cursor-pointer rounded-md w-[140px] md:w-[140px] lg:w-[165px] h-10 p-0 MenubarTrigger"
          ><div class="flex place-items-center">
            <p class="w-[140px] md:w-[140px] lg:w-[165px]">О КОМПАНИИ</p>
            <svg
              class="ml-[-20px] md:ml-[-15px] lg:ml-[-31px]"
              width="15px"
              height="24px"
              viewBox="0 0 24 24"
              id="magicoon-Filled"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path
                d="M21.707,8.707l-9,9a1,1,0,0,1-1.414,0l-9-9A1,1,0,1,1,3.707,7.293L12,15.586l8.293-8.293a1,1,0,1,1,1.414,1.414Z"
              />
            </svg></div
        ></MenubarTrigger>

        <MenubarContent alignOffset="5" class="MenubarContent">
          <MenubarItem
            inset
            @click="$router.push(`/about/aboutUs`)"
            class="cursor-pointer p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer p-0">
              О нас
            </p></MenubarItem
          >
          <MenubarSeparator />
          <MenubarItem inset class="p-0 w-[140px] md:w-[140px] lg:w-[165px]">
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer">
              Лицензии
            </p></MenubarItem
          >
          <MenubarSeparator />
          <MenubarItem
            inset
            @click="$router.push('/about/services')"
            class="cursor p-0 w-[140px] md:w-[140px] lg:w-[165px]"
          >
            <p class="text-center w-[140px] md:w-[140px] lg:w-[165px] h-7 pt-1 cursor-pointer">
              Услуги
            </p>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <RouterView></RouterView>
  </body>
</template>

<style scoped>
.MenubarTrigger[aria-expanded='true'] p {
  color: black;
}

.MenubarTrigger[aria-expanded='true'] svg {
  fill: black;
}

.MenubarContent[data-state='open'] p {
  color: black;
}
.MenubarContent[data-state='open'] p:hover {
  color: white;
  background-color: #769285;
}

button:hover {
  background-color: white;
  color: black;
}

div div p {
  color: #f0eee6;
}

p {
  color: #f0eee6;
}
div div div:not(:first-child):hover {
  background-color: #769285;
  border-radius: 0.375rem;
}
.MenubarTrigger:hover * {
  color: black;
  fill: black;
}
.MenubarTrigger:focus * {
  color: black;
  fill: black;
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
