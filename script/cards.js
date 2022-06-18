
  import { popupImage } from "../script/index.js";
  import { popupImgName } from "../script/index.js";
  import { popupImgWindow } from "../script/index.js";

  export class Card {
    constructor(name, link, cardSelector) {
      this._name = name;
      this._link = link;
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
        this._handleLikeClick();
      });
      
      this._element.querySelector('.elements__place').addEventListener('click', () => {
        this._handleOpenPopupImageClick();
      });

      this._element.querySelector('.elements__remove').addEventListener('click', () => {
        this._handleRemoveCardsClick();
      });
    }
    //function LIKE
    _handleLikeClick() {
      this._element.querySelector('.elements__like').classList.toggle('elements__like_activ');
    }
     //function openPopupImage
    _handleOpenPopupImageClick() {
      popupImgWindow.src = this._link;
      popupImgWindow.alt = this._name;
      popupImgName.textContent = this._name;
      popupImage.classList.add('popup_opened');
    }
     //function REMOVE CARDS
    _handleRemoveCardsClick() {
      this._element.closest('.elements__content').remove();
    }
}