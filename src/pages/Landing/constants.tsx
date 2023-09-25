import React from "react";
import swimsuitSrc from "@/assets/landing/images/swimsuit.png";
import tshirtSrc from "@/assets/landing/images/tshirt.png";
import hoodieSrc from "@/assets/landing/images/hoodie.png";
import shirtSrc from "@/assets/landing/images/shirt.png";
import outerwearSrc from "@/assets/landing/images/outerwear.png";
import slider1Src from "@/assets/landing/images/slider/1.jpg";
import slider2Src from "@/assets/landing/images/slider/2.jpg";
import slider3Src from "@/assets/landing/images/slider/3.jpg";
import slider4Src from "@/assets/landing/images/slider/4.jpg";
import slider5Src from "@/assets/landing/images/slider/5.jpg";
import slider6Src from "@/assets/landing/images/slider/6.jpg";
import slider7Src from "@/assets/landing/images/slider/7.jpg";
import slider8Src from "@/assets/landing/images/slider/8.jpg";
import slider9Src from "@/assets/landing/images/slider/9.jpg";
import slider10Src from "@/assets/landing/images/slider/10.jpg";
import { ReactComponent as IconPhone } from "@/assets/landing/icon_phone.svg";
import { ReactComponent as IconTelegram } from "@/assets/landing/icon_telegram.svg";
import { ReactComponent as IconViber } from "@/assets/landing/icon_viber.svg";
import { ReactComponent as IconInstagram } from "@/assets/landing/icon_instagram.svg";

export const SECTIONS = {
  contacts: {
    href: "contacts",
    name: "Контакти",
  },
  cooperationTerms: {
    href: "cooperationTerms",
    name: "Умови співпраці",
  },
  equipment: {
    href: "equipment",
    name: "Наше обладнання",
  },
  footer: {
    href: "footer",
    name: "",
  },
  header: {
    href: "header",
    name: "",
  },
  howToStart: {
    href: "howToStart",
    name: "Як почати?",
  },
  ourExperience: {
    href: "ourExperience",
    name: "Що ми вміємо?",
  },
  prices: {
    href: "prices",
    name: "Шо по чому?",
  },
};

export const EXPERIENCE_IMAGES = [
  {
    title: "купальники будь-якої складності",
    src: swimsuitSrc,
  },
  {
    title: "футболки, топи, майки, поло",
    src: tshirtSrc,
  },
  {
    title: "худі, світшоти, трикотажні штани та шорти",
    src: hoodieSrc,
  },
  {
    title: "льон і бавовна: сукні, сорочки, шорти, брюки, піжами",
    src: shirtSrc,
  },
  {
    title: "верхній одяг: пальто, куртки, тренчі, штучні шуби, бомбери",
    src: outerwearSrc,
  },
];

export const PRICES_DESCRIPTION = `Тут і зараз ти можеш ознайомитись із "приблизним" прайсом на послуги пошиття (у ціну входить крій, пошиття і прасування готових виробів) та розробку лекал, а також дізнаєшся приблизні витрати. Ціни вказані "від", при мінімальній складності виробу. 

Ми шиємо виключно якісно! На підвищення ціни впливає лише декоративна обробка, додаткові кишені та інші "плюшки" :)`;

export const STARTING_STEPS = [
  {
    title: "зв’язок",
    value:
      "Для знайомства ти можеш приїхати до нас на виробництво, якщо такої можливості немає через зайнятість чи відстань, то все наше спілкування відбувається у месенджерах;",
  },
  {
    title: "зразок",
    value:
      "Ми отримуємо від тебе усі матеріали для пошиття зразка (тканину, фурнітуру, бірки), і детальне ТЗ де ти описуєш, чого тобі хочеться;",
  },
  {
    title: "лекала",
    value:
      "На розробку лекал і пошиття зразка/ків нам знадобиться до 10 робочих днів (хоч це 1 зразок чи 10);",
  },
  {
    title: "оплата",
    value:
      "Коли зразок буде готовий: ми знов чекаємо тебе у гості, або відправляємо його поштою. Тільки на цьому етапі ми даємо точні ціни і витрати. Відправка зразка відбувається тільки після повної оплати.",
  },
  {
    title: "партія",
    value:
      "Ура! Можна приступати до пошиття партії. Ти відправляєш/привозиш нам усі матеріали для пошиття партії, відшитий нами зразок, пишеш детальне ТЗ, і чекаєш партію, яка буде готова у термін до 10 робочих днів.",
  },
];

export const EQUIPMENT_SECTIONS = [
  {
    title:
      "У нас на виробництві водиться багато цікавих спецмашин, завдяки яким ми можемо:",
    values: [
      "пришивати ґудзики на ґудзиковій машині, забувши про стару добру голку і нитку;",
      "виготовляти петлі на петельній машині для ґудзиків під їх розміри;",
      "ставити закріпки на виробах на машині для закріплення;",
      "встановлювати кнопки та люверси на промисловому електромагнітному пресі.",
    ],
  },
  {
    title: "Також у нас є:",
    values: [
      "промисловий зіг-заг;",
      "распошиви;",
      "п'ятинитковий оверлок и мікрооверлок;",
      "базові прямострочки та оверлоки, якими нікого не здивувати, але без яких не впоратись :)",
    ],
  },
  {
    title:
      "Наші закрійники (у яких досі по п'ять пальців на кожній руці, що свідчить про вищу кваліфікацію) працюють з достатньо небезпечним обладнанням:",
    values: [
      "сабельними вертикальними ножами;",
      "дисковими ножами;",
      "ну і старими добрими ножицями для дуже делікатних робіт.",
    ],
  },
];

export const SLIDER_IMAGES = [
  slider1Src,
  slider2Src,
  slider3Src,
  slider4Src,
  slider5Src,
  slider6Src,
  slider7Src,
  slider8Src,
  slider9Src,
  slider10Src,
];

export const CONTACTS_DESCRIPTION =
  "Надішли картинку, ескіз або фотографію виробу, який плануєш відшити для попереднього розрахунку вартості. Найближчим часом ти отримаєш всю потрібну інформацію по цінам і витратам для розрахунку собівартості та роздумів.";

export const CONTACTS_WARNING =
  "ВАЖЛИВО! Всі ціни та витрати є приблизними, точні ми називаємо тільки після пошиття зразка.";

export const CONTACTS = [
  {
    icon: <IconPhone />,
    title: "Подзвонити",
    value: "tel:+380980710564",
  },
  {
    icon: <IconTelegram />,
    title: "Telegram",
    value: "https://t.me/motherofdrogon",
  },
  {
    icon: <IconViber />,
    title: "Viber",
    value: "viber://chat?number=+380980710564",
  },
  {
    icon: <IconInstagram />,
    title: "Instagram @mama_i_gus_factory",
    value: "https://www.instagram.com/mama_i_gus_factory/",
  },
];

export const CONTACTS_CTA = "*** я лєра - напиши мені ***";

export const FOOTER_CONTACTS = [
  {
    title: "Подзвоніть нам",
    values: [
      {
        text: "+38 (098) 071 05 64",
        value: "tel:+380980710564",
      },
    ],
  },
  {
    title: "завітайте до нас",
    values: [
      {
        text: "Дніпро\nвулиця Тополина",
        value: "https://goo.gl/maps/zw3iUKmKNoztvuwU7",
      },
    ],
  },
  {
    title: "соціальні мережі",
    values: [
      {
        text: "instagram",
        value: "https://www.instagram.com/mama_i_gus_factory/",
      },
      {
        text: "facebook",
        value: "https://www.facebook.com/mama.i.gus.factory/",
      },
    ],
  },
  {
    title: "e-mail",
    values: [
      {
        text: "mama.gus.factory@gmail.com",
        value: "mailto: mama.gus.factory@gmail.com",
      },
    ],
  },
];
