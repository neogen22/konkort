<script setup lang="ts"></script>

<template>
  <div class="fade-text">
    <div class="flex justify-center">
      <h1 class="text-2xl pt-1 pl-2 pb-2 mt-0 text-orange-400 background-with-opacity w-[80px]">
        О нас
      </h1>
    </div>
    <p class="text-white text-base text-justify mt-6 background-with-opacity p-2">
      OOO «Конкорт-1» предоставляет услуги кабельного телевидения жителям города Кондопоги. Мы
      работаем на телекоммуникационном рынке более 10 лет, и это позволяет оценить нас как
      стабильную и надежную компанию, пользующуюся доверием горожан. Об этом свидетельствует тот
      факт, что услугами нашей компании пользуются 80% жителей города Кондопоги.
    </p>
    <h2
      class="text-white text-base mt-4 text-justify background-with-opacity p-2 underline font-semibold sm:w-max"
    >
      Воспользуйтесь нашими услугами и Вы получите ряд преимуществ:
    </h2>
    <p class="text-white text-base mt-4 text-justify background-with-opacity p-2">
      Более 100 каналов, которые включают в себя разнообразные жанры современного телевидения:
      сериалы, документальные фильмы, художественные фильмы отечественного и зарубежного
      производства, музыкальные, публицистические, аналитические и информационные программы с
      высоким цифровым качеством изображения, что позволяет удовлетворить самых взыскательных
      зрителей.
    </p>
    <p class="text-white text-base mt-4 text-justify background-with-opacity p-2">
      Вы будете в курсе всех новостей города, посмотрев новостной телеканал «КтвК», созданный для
      Вас. Вы сами каждый день участвуете в создании новостей, давая нашим корреспондентам интервью,
      участвуя в различных городских мероприятиях. На телеканале «КтвК» каждый горожанин может
      разместить: поздравления для близких, родных, любимых людей; рекламу; объявления.
    </p>
    <p class="text-white text-base mt-4 text-justify italic background-with-opacity p-2">
      Наши услуги отличаются высоким уровнем качества и приемлимыми ценами. Если Вы еще не
      подключились к сети кабельного телевидения, то мы будем рады видеть Вас в числе наших
      абонентов!
    </p>
  </div>
</template>
<style scoped>
p {
  text-shadow: rgba(250, 250, 250, 0.25) 0px 0px 3px;
}
.background-with-opacity {
  background: rgba(14, 18, 18, 0.75);
  border-radius: 15px;
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
