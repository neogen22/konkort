<template>
  <h1 class="text-black text-3xl text-center mt-4">Список телеканалов</h1>

  <Tabs default-value="social" class="mt-4">
    <TabsList class="flex justify-center">
      <TabsTrigger value="social"> Социальный пакет </TabsTrigger>
      <TabsTrigger value="base"> Базовый пакет </TabsTrigger>
    </TabsList>

    <TabsContent value="social" class="">
      <h2 class="text-black text-xl text-center mt-4">СОЦИАЛЬНЫЙ ПАКЕТ</h2>
      <p class="text-black text-center">по состоянию на 13.03.2019</p>
      <div class="grid grid-cols-3 place-items-center border-l border-b mt-4">
        <span
          v-for="channel in channelsSocial"
          class="w-[320px] text-center min-h-7 border-r border-t"
        >
          {{ channel }}
        </span>
      </div>
    </TabsContent>
    <TabsContent value="base" class="">
      <h2 class="text-black text-xl text-center mt-4">БАЗОВЫЙ ПАКЕТ</h2>
      <p class="text-black text-center">по состоянию на 13.03.2019</p>
      <div class="grid grid-cols-3 place-items-center border-l border-b mt-4">
        <span
          v-for="channel in channelsBase"
          class="w-[320px] text-center min-h-7 border-r border-t"
        >
          {{ channel }}
        </span>
      </div>
    </TabsContent>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

let channelsSocial = [
  'Shop and Show',
  'Shopping Live',
  'Беларусь 24',
  'Домашний',
  'Звезда',
  'История',
  'Калейдоскоп',
  'Карусель',
  'Красная линия',
  'КТВК',
  'ЛДПР ТВ',
  'МАМА',
  'Матч ТВ',
  'Мир',
  'МУЗ ТВ',
  'НТВ',
  'ОТР',
  'Первый канал',
  'Пёс и Ко',
  'Пятница',
  'Пятый канал',
  'РБК',
  'РЕН',
  'Россия 1',
  'Россия 24',
  'Россия К',
  'СОЮЗ',
  'СПАС',
  'СТС',
  'ТВ-3',
  'ТВЦ',
  'ТНТ',
  'ТНТ 4',
  'Точка ТВ',
  'Ювелирочка'
]
if (channelsSocial.length % 3 !== 0) {
  while (channelsSocial.length % 3 !== 0) {
    channelsSocial.push('')
  }
}
let channelsBase = []
for (let i = 1; i < 115; i += 1) {
  channelsBase.push(`channel ${i}`)
}
</script>
<style scoped></style>
