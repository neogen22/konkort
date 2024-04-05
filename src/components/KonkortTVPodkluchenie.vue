<template>
  <div class="[&>*] fade-text">
    <div class="flex justify-center">
      <h1 class="text-2xl text-center text-orange-400 background-with-opacity p-2 w-[640px]">
        Как подключиться к кабельной сети ООО "Конкорт-1"
      </h1>
    </div>
    <p class="text-base mt-6 text-justify text-white background-with-opacity p-2">
      ООО "Конкорт-1" предоставляет своим абонентам несколько пакетов телеканалов — "социальный
      пакет" и "базовый пакет". Возможность смотреть программы в цифровом качестве есть у
      обладателей обоих пакетов.
    </p>
    <p class="text-base mt-4 text-justify text-white background-with-opacity p-2">
      Для этого Вам необходимо подойти с паспортом по адресу: г. Кондопога, ул.Комсомольская, дом 18
      и оформить договор.
    </p>
    <p class="text-base mt-4 text-justify text-white background-with-opacity p-2 sm:w-max">
      Стоимость подключения к сети кабельного телевидения — 300 рублей.
    </p>
    <p class="text-base mt-4 text-justify text-white background-with-opacity p-2 lg:w-max">
      Ежемесячная абонентская плата — от 260 рублей (социальный пакет) до 360 рублей (базовый
      пакет).
    </p>
    <p class="text-base mt-4 text-justify text-white background-with-opacity p-2 sm:w-max">
      Стоимость цифрового модуля — 1300 рублей.
    </p>
    <p class="text-base mt-4 text-justify text-white background-with-opacity p-2">
      Для владельцев телевизоров нового поколения со встроенным цифровым тюнером и с поддержкой
      стандарта DVB-C у нас есть отдельное предложение. Чтобы смотреть программы в цифровом формате
      по нашей кабельной сети, достаточно приобрести у нас модуль декодера. Его стоимость — 1300
      рублей. Единственное что требуется в этом случае - это произвести тестирование телевизора на
      совместимость с нашим оборудованием. Иногда достаточно поменять программное обеспечение в
      телевизоре.
    </p>
  </div>
</template>
<style scoped>
.background-with-opacity {
  background: rgba(14, 18, 18, 0.75);
  border-radius: 15px;
}
p {
  text-shadow: rgba(250, 250, 250, 0.25) 0px 0px 3px;
}
.fade-text {
  animation: fade-in 500ms;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
