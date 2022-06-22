const openPopup = (item) => {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupESC);
  }
  const closePopup = (item) => {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupESC);
  };
  const closePopupESC = (evt) => {
    if (evt.key === 'Escape') {
      const popupOpenElement = document.querySelector('.popup_opened');
      closePopup(popupOpenElement);
    }
  };

export {openPopup, closePopup, closePopupESC};