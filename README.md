<a id="top"></a>
# [Camper rental](https://github.com/Aleksey-Dr/camper-rental)

<a href="#1"><img src="https://img.shields.io/badge/Опис Проeкту-512BD4?style=for-the-badge"/></a> <a href="#2"><img src="https://img.shields.io/badge/Функції-ECD53F?style=for-the-badge"/></a> <a href="#3"><img src="https://img.shields.io/badge/Підготовка до роботи-007054?style=for-the-badge"/></a> <a href="#4"><img src="https://img.shields.io/badge/Застосовані технології-A9225C?style=for-the-badge"/></a>

## Developer
<a href="https://github.com/Aleksey-Dr"><img src="https://img.shields.io/badge/Aleksey-Dr-0099E5?style=for-the-badge&logo=github&logoColor=212121"/></a>
___
<a id="1"></a>

## <img src="https://img.shields.io/badge/Опис Проeкту-512BD4?style=for-the-badge"/>

[__Camper rental__](https://github.com/Aleksey-Dr/camper-rental) - це застосунок для компанії, що надає послуги надання в Україні камперів в оренду.

Завдання [_Camper rental_](https://github.com/Aleksey-Dr/camper-rental) - запропонувати відвідувачу сайту зручний та наочний вибір камперу для омріяної подорожі!

На сторінках [_Camper rental_](https://github.com/Aleksey-Dr/camper-rental), є можливість ознайомитися з [_каталогом камперів_](https://aleksey-dr.github.io/camper-rental/catalog), подивитись детальну інформацію про кожен кампер не переходячи на окрему сторінку, а натиснувши кнопку "Show more" в картці камперу.  Також є можливість обрати кампери, на які користувач звернув увагу, і додати їх до списку обраних [_Favorites_](https://aleksey-dr.github.io/camper-rental/favorites). В картках камперів наведені фото зовнішнього виду камперу та, при відкритті вікна з детальним описом, фото інтер'єру.

Сторінка передбачає можливість, за допомогою наведеної на сторінці [_форми_](https://github.com/tatidan/ms-htmlcss-teamproject-2023/blob/main/src/partials/leave-app.html), зареєструватись та обрати собі кампер для подорожі.
___
<a id="2"></a>

## <img src="https://img.shields.io/badge/Функції-ECD53F?style=for-the-badge"/>

[__Проєкт__](https://github.com/tatidan/ms-htmlcss-teamproject-2023) створено з урахуванням наступних вимог:

Перелік сторінок:
1. Домашня сторінка з загальним описом послуг, що надає компанія ([_Home_](https://aleksey-dr.github.io/camper-rental)).
2. Сторінка, що містить каталог камперів різної комплектації ([_Catalog_](https://aleksey-dr.github.io/camper-rental/catalog)).
3. Сторінка з оголошеннями, які були додані користувачем в улюблені ([_Favorites_](https://aleksey-dr.github.io/camper-rental/favorites)).

1). Відповідно до [_макету_](https://www.figma.com/file/fnMWH0eBB7NnoqdAiiKWsQ/Test?type=design&node-id=0-1&mode=design&t=oacPC5pwxsn6BXEW-0) реалізувати картку оголошення про здачу кампера в оренду.
2). На першій сторінці [_каталогу_](https://aleksey-dr.github.io/camper-rental/catalog) має рендеритися 4 оголошення, а їх решта - по кліку на кнопку Load more.
3). У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має додаватися до [_списку улюблених_](https://aleksey-dr.github.io/camper-rental/favorites), а колір кнопки змінюватися.
4). У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.
5). У разі кліку по кнопці Show more має відкриватись модальне вікно з детальною інформацією про кампер.
6). В модальному вікні міститься інформація щодо особливостей кампера і відгуків про нього. Відмалювання інформації має залежати від стану активної таби.
7). В модальному вікні також міститься форма для оформлення бронювання камперу, що складається з полів name, email, booking date і comment.
8). Ціна оренди має бути прописана одним значенням (наприклад, 8000). В UI - виведено через кому (8000,00).
___
<a id="3"></a>

## <img src="https://img.shields.io/badge/Підготовка до роботи-007054?style=for-the-badge"/>

Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
[Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.

### Iніціювати проект
Встанови базові залежності проекту в терміналі командою `npm install`. :white_check_mark:
### Запустити проект
1. Запусти режим розробки, виконавши в терміналі команду `npm start`. :white_check_mark:
2. Перейди у браузері за адресою [http://localhost:3000](http://localhost:3000). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту. :white_check_mark:
___
<a id="4"></a>

## <img src="https://img.shields.io/badge/Застосовані технології-A9225C?style=for-the-badge"/>

[![Technologies](https://skillicons.dev/icons?i=html,css,js,react,nodejs)](https://skillicons.dev)
[![Tools](https://skillicons.dev/icons?i=github,git,vscode,figma,sass)](https://skillicons.dev)

## Create React App

Цей проект було створено за допомогою Create React App. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://create-react-app.dev/).

## Файли і папки

- Файли розмітки компонентів сторінки в папці `src/components` та
  імпортуються до файлу `App.jsx - index.js - public/index.html`.
- Файли розмітки сторінок в папці `src/pages`.
- Файли стилів в папках компонентів (для стилізації застосовувались модулі) `src/components/<NameComponent>/<NameComponent.module.scss>`.
- Зображення в `src/images`.
- Для роботи зі стейтами застосовано бібліотеки  `"@reduxjs/toolkit"`, `"@redux-devtools/extension"`.

[Вгору :arrow_double_up:](#top)