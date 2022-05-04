// первый попап доступы
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userInfo = document.querySelector('.profile__info');
let inputUserName = document.querySelector('.popup__input_value_name');
let inputUserInfo = document.querySelector('.popup__input_value_info');
let buttonClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form')

// первый попап функционал
editButton.addEventListener('click', function () {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
    popup.classList.add('popup_opened');
});

function closePopup () {
    popup.classList.toggle('popup_opened');
};

buttonClose.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);


popup.addEventListener('click', function (event) {
    if(event.target == event.currentTarget) {
        closePopup();
    }
});

// второй попап доступы/////////////////////////////////////////////////////////////////
let popupAdd = document.querySelector('.popup-add');
let editElements = document.querySelector('.profile__addbutton');
let inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
let inputUrl = document.querySelector('.popup-add__input_value_url');
let closePopupAdd = document.querySelector('.popup-add__close');
let addBut = document.querySelector('.popup-add__button');
let elementsContent = document.querySelector('.elements');
let addForm = popupAdd.querySelector('.popup-add__form');

// второй попап функционал
editElements.addEventListener('click', () => {
  popupAdd.classList.add('popup-add_opened');
})

function closeAdd () {
  popupAdd.classList.toggle('popup-add_opened');
}

closePopupAdd.addEventListener('click', closeAdd);

//// add new elements
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
// Выводит массив 
  initialCards.forEach(function (item) {
    let elementsTemplate = elementsContent.querySelector('#elements').content;
    let elements = elementsTemplate.querySelector('.elements__content').cloneNode(true);
    
    elements.querySelector('.elements__name-place').textContent = item.name;
    elements.querySelector('.elements__place').src = item.link;

    elementsContent.append(elements);
  });
  
  //добавляет элемент 
   function addElements (evt) {
     evt.preventDefault()
      let elementsTemplate = elementsContent.querySelector('#elements').content;
      let elements = elementsTemplate.querySelector('.elements__content').cloneNode(true);

      elements.querySelector('.elements__name-place').textContent = inputNamePlase.value;
      elements.querySelector('.elements__place').src = inputUrl.value;
      
      elements.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_activ');
      })

      elementsContent.prepend(elements);
      closeAdd();
  }


  addForm.addEventListener('submit', addElements);


















// document.addEventListener('keyup', function (event) {
//     event.preventDefault()
//     if( event.key == 'Enter') {
//         popup.classList.remove('popup_opened');
//         formSubmitHandler();
//     }
// })