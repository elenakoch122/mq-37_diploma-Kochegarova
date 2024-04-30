const popup = document.querySelector('.popup');
const feedback = document.querySelector('#feedback');

feedback.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_hidden');
});

const popupCloseBtn = document.querySelector('.popup__closeBtn');
popupCloseBtn.addEventListener('click', () => popup.classList.add('popup_hidden'));

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.button_menu');
const heading = document.querySelector('.heading');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('menu_visible');

  menu.classList.contains('menu_visible') ? heading.style.zIndex = '0' : heading.style.zIndex = '3';

  const nav = document.querySelector('.menu_visible');
  nav.addEventListener('click', () => menu.classList.toggle('menu_visible'));
});

// при повторном нажатии на ссылку в бургер меню nav не скрывается