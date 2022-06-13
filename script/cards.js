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
  const popupImageClose2 = document.querySelector('.popup-img__close');

  class Card {
    constructor(data) {
      this._name = data.name;
      this._link = data.link;
    }
     _getCards() {
      const elementTemplate = document.querySelector('#elements').content;
      const clone = elementTemplate.querySelector('.elements__content').cloneNode(true);
      return clone
    }
    generateCard() {
      this._element = this._getCards();
      this._setEventLikeListeners();
      this._setHandlePopupImageClick();
      this._setHandleRemoveClick();
      this._setHandleClosePopupClick();

      this._element.querySelector('.elements__name-place').textContent = this._name;
      this._element.querySelector('.elements__place').src = this._link;
      this._element.querySelector('.elements__place').alt = this._name;

      return this._element;
    }
    //function LIKE
    _setEventLikeListeners() {
      this._element.querySelector('.elements__like').addEventListener('click', () => {
        this._handleLikeClick();
      });
    }
    _handleLikeClick() {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_activ');
    }
    //function openPopupImage
    _setHandlePopupImageClick() {
      this._element.querySelector('.elements__place').addEventListener('click', () => {
        this._handleOpenPopupImageClick();
      });
    }
    _handleOpenPopupImageClick() {
      popupImgWindow2.src = this._link;
      popupImgWindow2.alt = this._name;
      popupImgName2.textContent = this._name;
      popupsImage.classList.add('popup_opened');
    }
    //function closePopups
    _setHandleClosePopupClick() {
      popupImageClose2.addEventListener('click', () => {
        this._handleClosePopupClick();
      });
    }
    _handleClosePopupClick() {
      popupsImage.classList.remove('popup_opened');
    }
    //function REMOVE CARDS
    _setHandleRemoveClick() {
      this._element.querySelector('.elements__remove').addEventListener('click', () => {
        this._handleRemoveClick();
      })
    }
    _handleRemoveClick() {
      this._element.closest('.elements__content').remove();
    }
    //function createCardElemements
    __handleCreateCardsElementsClick() {
      
    }

}

initialCards.forEach((item) => {
  const card = new Card(item);
  const cartElement = card.generateCard();
  document.querySelector('.elements').append(cartElement);
});