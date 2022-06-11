const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  class Card {
    constructor(name, link) {
      this._mame = name;
      this._link = link;
    }
     _getCards() {
      const elementTemplate = document.querySelector('#elements').content;
      const clone = elementTemplate.querySelector('.elements__content').cloneNode(true);
      return clone
    }
    generateCard() {
      this._element = this._getCards();
      this._setEventLikeListeners();

      this._element.querySelector('.elements__name-place').textContent = this._mame;
      this._element.querySelector('.elements__place').src = this._link;
      this._element.querySelector('.elements__place').alt = this._mame;

      return this._element;
    }
    _setEventLikeListeners() {
      this._element.querySelector('.elements__like').addEventListener('click', () => {
        this._handleLikeClick();
      });
    }
    _handleLikeClick() {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_activ');
    }
}

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cartElement = card.generateCard();
  document.querySelector('.elements').append(cartElement);
});