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
  const popupsImage = document.querySelector('.popup-img');
  const popupImgWindow2 = document.querySelector('.popup-img__window');
  const popupImgName2 = document.querySelector('.popup-img__img-name');

  class Card {
    constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
     _getCards() {
      const elementTemplate = document.querySelector(this._cardSelector).content;
      const clone = elementTemplate.querySelector('.elements__content').cloneNode(true);
      return clone
    }
    generateCard() {
      this._element = this._getCards();
      this._setEventListeners();

      this._element.querySelector('.elements__name-place').textContent = this._name;
      this._element.querySelector('.elements__place').src = this._link;
      this._element.querySelector('.elements__place').alt = this._name;

      return this._element;
    }
      
    _setEventListeners() {
      this._element.querySelector('.elements__like').addEventListener('click', () => {
        //function LIKE
        this._handleLikeClick();
      });
      
      this._element.querySelector('.elements__place').addEventListener('click', () => {
        //function openPopupImage
        this._handleOpenPopupImageClick();
      });

      this._element.querySelector('.elements__remove').addEventListener('click', () => {
        //function REMOVE CARDS
        this._handleRemoveCardsClick();
      });
    }
    
    _handleLikeClick() {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_activ');
    }
    
    _handleOpenPopupImageClick() {
      popupImgWindow2.src = this._link;
      popupImgWindow2.alt = this._name;
      popupImgName2.textContent = this._name;
      popupsImage.classList.add('popup_opened');
    }
   
    _handleRemoveCardsClick() {
      this._element.closest('.elements__content').remove();
    }
}

// initialCards.forEach((item) => {
//   const card = new Card(item, '#elements');
//   const cartElement = card.generateCard();
//   document.querySelector('.elements').append(cartElement);
// });