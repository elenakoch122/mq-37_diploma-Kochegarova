const popup = document.querySelector('.popup');

const feedback = document.querySelector('#feedback');
feedback.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_hidden');
});

const popupCloseBtn = document.querySelector('.popup__closeBtn');
popupCloseBtn.addEventListener('click', () => popup.classList.add('popup_hidden'));