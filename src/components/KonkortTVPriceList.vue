<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('not-cool')
        entry.target.classList.remove('cool')
      } else {
        entry.target.classList.remove('not-cool')
        entry.target.classList.add('cool')
      }
    })
  })
  let allTr = document.querySelectorAll('tr')
  allTr.forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="flex justify-center">
    <h1 class="text-2xl text-center text-orange-400 background-with-opacity p-2">
      Прейскурант на услуги
    </h1>
  </div>
  <div class="background-with-opacity">
    <Table class="mt-6 [&>*]:text-white"
      ><TableHeader>
        <TableRow class="up">
          <TableHead class="text-center">№ п/п</TableHead>
          <TableHead class="text-center">Наименование услуги, товара</TableHead>
          <TableHead class="text-center">Вид</TableHead>
          <TableHead class="text-center"
            >Цена, <br />
            руб.-коп.</TableHead
          >
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания, доступ к кабельной сети связи телерадиовещания, доставка сигналов
            телерадиопрограмм:
          </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center"></TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.1.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания (оформление договора, регистрация абонента, выделение лицевого счета,
            установка коммутирующего элемента на коаксиальный кабель абонента и техническое
            подключение одной единицы пользовательского (оконечного) оборудования абонента к
            кабельной сети без предоставления в собственность заявителю одной единицы
            пользовательского (оконечного) оборудования (вне зависимости от наличия или отсутствия
            цифровой приставки с СУД STV-Crypt у заявителя).) Для новых пользователей.
          </TableCell>
          <TableCell class="text-center w-[200px]"
            >Разовая,<br />
            за 1 единицу оборудования</TableCell
          >
          <TableCell class="text-center">300.00</TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.2.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания (оформление договора, регистрация абонента, выделение лицевого счета,
            установка коммутирующего элемента на коаксиальный кабель абонента и техническое
            подключение одной единицы пользовательского (оконечного) оборудования абонента к
            кабельной сети с предоставлением в собственность заявителю одной единицы
            пользовательского (оконечного) оборудования (цифровая приставка с СУД STV-Crypt) с
            регистрацией и активацией.) Для новых пользователей.
          </TableCell>
          <TableCell class="text-center w-[200px]"
            >Разовая,<br />
            за 1 единицу оборудования</TableCell
          >
          <TableCell class="text-center">1900.00</TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.3.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания (оформление договора, регистрация абонента, выделение лицевого счета,
            установка коммутирующего элемента на коаксиальный кабель абонента и техническое
            подключение одной единицы пользовательского (оконечного) оборудования абонента к
            кабельной сети с предоставлением в собственность заявителю одной единицы
            пользовательского (оконечного) оборудования (модуля декодера СУД STV-Crypt) с
            регистрацией и активацией). Для новых пользователей.
          </TableCell>
          <TableCell class="text-center w-[200px]"
            >Разовая,<br />
            за 1 единицу оборудования</TableCell
          >
          <TableCell class="text-center">1300.00</TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.4.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >То же что и п. 1.1., но для юридических лиц и ЧП.
          </TableCell>
          <TableCell class="text-center w-[200px]"
            >Разовая,<br />
            за 1 единицу оборудования</TableCell
          >
          <TableCell class="text-center">900.00</TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.5.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания (внесение изменений в договор, установка каждого дополнительного
            коммутирующего элемента на каждый дополнительный коаксиальный кабель абонента и
            техническое подключение каждой дополнительной единицы пользовательского (оконечного)
            оборудования абонента к кабельной сети без предоставления в собственность абоненту одной
            единицы пользовательского (оконечного) оборудования (цифровая приставка с СУД STV-Crypt
            имеется у абонента)).Действующий договор.
          </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center">Бесплатно</TableCell>
        </TableRow>
        <TableRow class="up">
          <TableCell class="text-left w-[80px]">1.6.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования Абонента к кабельной сети связи
            телерадиовещания (внесение изменений в договор, установка каждого дополнительного
            коммутирующего элемента на каждый дополнительный коаксиальный кабель абонента и
            техническое подключение каждой дополнительной единицы пользовательского (оконечного)
            оборудования абонента к кабельной сети с предоставлением в собственность абоненту одной
            единицы пользовательского (оконечного) оборудования (цифровая приставка с СУД STV-Crypt)
            с регистрацией и активацией). Действующий договор. Без стоимости вызова специалиста.
          </TableCell>
          <TableCell class="text-center w-[200px]"
            >Разовая, <br />
            за каждую дополнительную единицу оборудования, в рамках действующего договора</TableCell
          >
          <TableCell class="text-center">1900.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.7.</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Абонентская плата (для физических лиц – граждан):
          </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.7.1</TableCell>
          <TableCell class="text-justify w-[600px]"
            >техническая поддержка и доступ к кабельной сети связи телерадиовещания (не зависит от
            формата - аналогового или цифрового)
          </TableCell>
          <TableCell class="text-center w-[200px]">Периодическая, ежемесячно</TableCell>
          <TableCell class="text-center">260.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.7.2</TableCell>
          <TableCell class="text-justify w-[600px]"
            >доставка сигналов телерадиопрограмм (тарифный план "СОЦИАЛЬНЫЙ" (аналоговый или
            цифровой форматы))
          </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center">Бесплатно</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.7.3</TableCell>
          <TableCell class="text-justify w-[600px]"
            >доставка сигналов телерадиопрограмм (тарифный план "БАЗОВЫЙ" (цифровой формат))
          </TableCell>
          <TableCell class="text-center w-[200px]">Периодическая, ежемесячно</TableCell>
          <TableCell class="text-center">100.00+ п.1.7.1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.8</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Абонентская плата (для юридических лиц и ЧП):
          </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.8.1</TableCell>
          <TableCell class="text-justify w-[600px]"
            >техническая поддержка и доступ к кабельной сети связи телерадиовещания (не зависит от
            формата - аналогового или цифрового).
          </TableCell>
          <TableCell class="text-center w-[200px]">Периодическая, ежемесячно</TableCell>
          <TableCell class="text-center">360.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">1.8.2</TableCell>
          <TableCell class="text-justify w-[600px]"
            >доставка сигналов телерадиопрограмм (тарифный план "СОЦИАЛЬНЫЙ" (аналоговый или
            цифровой форматы)).
          </TableCell>
          <TableCell class="text-center w-[200px]">Периодическая, ежемесячно</TableCell>
          <TableCell class="text-center">60.00+ п.1.8.1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">2</TableCell>
          <TableCell class="text-justify w-[600px]">Разовые услуги: </TableCell>
          <TableCell class="text-center w-[200px]"></TableCell>
          <TableCell class="text-center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">2.1</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Выезд по заявке мастера с проверочным телевизором</TableCell
          >
          <TableCell class="text-center w-[200px]">Разовая, за 1 вызов</TableCell>
          <TableCell class="text-center">150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">2.2</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Отсутствие абонента дома и повторный вызов мастера</TableCell
          >
          <TableCell class="text-center w-[200px]">Разовая, за 1 вызов</TableCell>
          <TableCell class="text-center">200.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">2.3</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Временное блокирование доступа к сигналам телерадиопрограмм принимаемых
            пользовательским (оконечным) оборудованием по письменному заявлению абонента</TableCell
          >
          <TableCell class="text-center w-[200px]">Разовая, 1 раз в календарный год</TableCell>
          <TableCell class="text-center">Бесплатно</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="text-left w-[80px]">2.4</TableCell>
          <TableCell class="text-justify w-[600px]"
            >Подключение пользовательского (оконечного) оборудования абонента к кабельной сети связи
            телерадиовещания после временного блокирования доступа к сигналам телерадиопрограмм,
            принимаемых пользовательским (оконечным) оборудованием по письменному заявлению абонента
            до 6 месяцев</TableCell
          >
          <TableCell class="text-center w-[200px]">1 раз в год</TableCell>
          <TableCell class="text-center">Бесплатно</TableCell>
        </TableRow>
      </TableBody>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.5</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Последующие подключения пользовательского (оконечного) оборудования Абонента к кабельной
          сетисвязи телерадиовещания после временного блокирования доступа к сигналам
          телерадиопрограмм, принимаемых пользовательским (оконечным) оборудованием, по письменному
          заявлению абонента, срок которого истек и превысел 6 месяцев(в данном случае договор
          считается расторгнутым)</TableCell
        >
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center">300.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.6</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Повторное подключение пользовательского (оконечного) оборудования Абонента к кабельной
          сети связи телерадиовещания после временного блокирования доступа к сигналам
          телерадиопрограмм принимаемых пользовательским (оконечным) оборудованием за
          задолженность</TableCell
        >
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center">Бесплатно</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.7</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Разблокирование доступа к сигналам телерадиопрограмм принимаемых пользовательским
          (оконечным) оборудованием</TableCell
        >
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center">Бесплатно</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.8</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Настройка телевизора в автоматическом режиме в помещении абонента по заявке абонента
          (тарифный план "СОЦИАЛЬНЫЙ")</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая, за 1 настройку</TableCell>
        <TableCell class="text-center">300.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.9</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Настройка телевизора (цифровой приставки) в автоматическом режиме в помещении абонента по
          заявке абонента (тарифный план "БАЗОВЫЙ")</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая, за 1 настройку</TableCell>
        <TableCell class="text-center">500.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.10</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Установка сплиттера в указанное клиентом место с разделкой телевизионного кабеля с
          подключением телевизионного кабеля и настройкой ТВ (без сверления, долбления, штробления
          поверхностей на абонентском участке кабеля) (1шт)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая</TableCell>
        <TableCell class="text-center">150.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.11</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Установка сплиттера в указанное клиентом место с разделкой телевизионного кабеля с
          подключением телевизионного кабеля без настройки ТВ (без сверления, долбления, штробления
          поверхностей на абонентском участке кабеля) (1 шт)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая</TableCell>
        <TableCell class="text-center">100.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.12</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Прокладка абонентского кабеля в квартире (при наличии технической
          возможности).</TableCell
        >
        <TableCell class="text-center w-[200px]">1 метр</TableCell>
        <TableCell class="text-center">55.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.13</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Сверление отверстий – фанера, гипсокартон и дерево (по договоренности между абонотделом и
          заказчиком)</TableCell
        >
        <TableCell class="text-center w-[200px]">за 1 отверстие</TableCell>
        <TableCell class="text-center">50.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.14</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Сверление отверстий – бетон, металл (по договоренности между абонотделом и
          заказчиком)</TableCell
        >
        <TableCell class="text-center w-[200px]">за 1 отверстие</TableCell>
        <TableCell class="text-center">150.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.15</TableCell>
        <TableCell class="text-justify w-[600px]">Установка штекера абонента (1шт)</TableCell>
        <TableCell class="text-center w-[200px]">Разовая, за 1 шт.</TableCell>
        <TableCell class="text-center">100.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.16</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Мелкий ремонт негарантийного оборудования (выявление неисправности, ремонт или замена
          малоценных элементов, демонтаж, установка исправного на то же место)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая</TableCell>
        <TableCell class="text-center">250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">2.17</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Ремонт негарантийного оборудования с заменой узлов</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая</TableCell>
        <TableCell class="text-center">500.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">3</TableCell>
        <TableCell class="text-justify w-[600px]">Информационно-справочные услуги:</TableCell>
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">3.1</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Информация о балансе лицевого счета абонента устно (по телефону или в офисе)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая, за 1 запрос</TableCell>
        <TableCell class="text-center">Бесплатно</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">3.2</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Подробная сверка лицевого счета абонента устно (только в офисе с предоставлением
          платежных документов абонента)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая, за 1 сверку</TableCell>
        <TableCell class="text-center">Бесплатно</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">3.3</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Составление и печать справок, копии запрашиваемых документов, а также выписок о состоянии
          лицевого счета абонента, копии договоров абонента на бумаге формата А4 (по письменному
          заявлению абонента)</TableCell
        >
        <TableCell class="text-center w-[200px]">Разовая, за 1 лист</TableCell>
        <TableCell class="text-center">40.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">4</TableCell>
        <TableCell class="text-justify w-[600px]">Сопутствующие товары:</TableCell>
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">4.1</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Цифровой приемник TVHELPC201 (производство Россия)</TableCell
        >
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">1900.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">4.2</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Модуль условного доступа STVCrypt (только для абонентов ООО "КОНКОРТ-1" с регистрацией и
          активацией)</TableCell
        >
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">1300.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">4.3</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Сплиттеры для квартирной кабельной разводки:</TableCell
        >
        <TableCell class="text-center w-[200px]"></TableCell>
        <TableCell class="text-center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]"></TableCell>
        <TableCell class="text-justify w-[600px]">Сплиттер на 2 телевизора</TableCell>
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">90.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]"></TableCell>
        <TableCell class="text-justify w-[600px]">Сплиттер на 3 телевизора</TableCell>
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">120.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-center w-[80px]"></TableCell>
        <TableCell class="text-justify w-[600px]">Сплиттер на 4 телевизора</TableCell>
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">150.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-left w-[80px]">4.4</TableCell>
        <TableCell class="text-justify w-[600px]"
          >Пульт ДУ для цифрового приемника TVHELPC201</TableCell
        >
        <TableCell class="text-center w-[200px]">за 1 шт</TableCell>
        <TableCell class="text-center">250.00</TableCell>
      </TableRow>
    </Table>
  </div>
</template>
<style scoped>
.up {
  opacity: 0;
  transform: translateX(-300px);
  transition: all 0.5s ease-out;
  transition-delay: 0.3s;
}
.cool {
  opacity: 0;
  transform: translateX(-300px);
  transition: all 0.5s ease-out;
  transition-delay: 0.3s;
}
.not-cool {
  opacity: 1;
  transform: translateX(0px);
  transition: all 0.5s ease-out;
  transition-delay: 0.3s;
}
p {
  text-shadow: rgba(250, 250, 250, 0.25) 0px 0px 3px;
}
h1 {
  animation: h1-from 750ms;
}
@keyframes h1-from {
  0% {
    opacity: 0;
    transform: translateX(-400px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.background-with-opacity {
  background: rgba(14, 18, 18, 0.75);
  border-radius: 15px;
}
</style>
