import React from "react";
import swimsuitSrc from "@/assets/landing/images/swimsuit.png";
import tshirtSrc from "@/assets/landing/images/tshirt.png";
import hoodieSrc from "@/assets/landing/images/hoodie.png";
import shirtSrc from "@/assets/landing/images/shirt.png";
import outerwearSrc from "@/assets/landing/images/outerwear.png";
import slider1Src from "@/assets/landing/images/slider_1.png";
import slider2Src from "@/assets/landing/images/slider_2.png";
import slider3Src from "@/assets/landing/images/slider_3.png";
import slider4Src from "@/assets/landing/images/slider_4.png";
import slider5Src from "@/assets/landing/images/slider_5.png";
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

export const TERMS_OF_COOPERATION = [
  {
    title: "Мінімальна партія",
    value: `Мінімальна партія за яку ми можемо взятись - це 10 одиниць в одній моделі.
    
    Приклад: як приклад візьмемо партію футболок:  10 oversize футболок.`,
  },
  {
    title: "Кількість кольорів і розмірів",
    value: `Мінімальна кількість відшитих одиниць в 1 кольорі і розмірі - 4 одиниць.
      
      Приклад: продовжуємо працювати з 10 oversize футболками:
      чорний: S-4, M-4
      білий: S-4`,
  },
  {
    title: "Про матеріали",
    value: `Уважно перевіряйте тканини та фурнітуру, яку приносите нам на виробництво! Ми не несемо відповідальності за постачальників, якщо ми виявимо брак на тканині або фурнітурі до або в процесі пошиття, то обов'язково повідомимо вас і не будемо навмисно шити брак, але якщо брак буде виявлений нами або вами на готовому виробі, то ви будете змушені сплатити за нього, як за повноцінну одиницю з партії.`,
  },
  {
    title: "Про лекала",
    value: `Після закінчення роботи ми не віддаємо розроблені нами лекала. Лекала залишаються у нас на виробництві для нашої подальшої співпраці, ми їх нікому не перепродаємо і ні з ким не працюємо по ним.`,
  },
  {
    title: "Про терміни",
    value: `Нам знадобиться до 10 робочих днів як на розробку та пошиття зразка, так і на пошиття партії. Але май на увазі, що зворотний відлік 10 робочих днів розпочнеться лише тоді, коли всі матеріали для пошиття і відшитий нами зразок будуть у нас на виробництві!`,
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
        text: "Дніпро\nтополина 12а",
        value: "https://goo.gl/maps/18uTKjHYHiJzjEhB6",
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
        text: "Tiktok (?)",
        value: "",
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
