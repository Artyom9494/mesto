// первый попап доступы
const popup = document.querySelector('.popup_profile');
const Buttonedit = document.querySelector('.profile__edit-button');
const userName = document.querySelector('.profile__name');
const userInfo = document.querySelector('.profile__info');
const inputUserName = document.querySelector('.popup__input_value_name');
const inputUserInfo = document.querySelector('.popup__input_value_info');
const buttonClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form')

function popupOpen () {
  popup.classList.add('popup_opened');
}
function popupClose () {
  popup.classList.remove('popup_opened');
};

// первый попап функционал
Buttonedit.addEventListener('click', function () {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
    popupOpen();
});

buttonClose.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);


popup.addEventListener('click', function (event) {
    if(event.target == event.currentTarget) {
      popupClose();
    }
});



// 2 попап доступы
const popupAdd = document.querySelector('.popup-add');
const editElements = document.querySelector('.profile__addbutton');
const inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
const inputUrl = document.querySelector('.popup-add__input_value_url');
const closePopupAdd = document.querySelector('.popup-add__close');
const addBut = document.querySelector('.popup-add__button');
const addForm = popupAdd.querySelector('.popup-add__form');
const eBody = document.querySelector('.elements');
const eTemplate = document.querySelector('#elements').content;
const eContent = document.querySelector('.elements__content');
// второй попап функционал
editElements.addEventListener('click', () => {
  popupAdd.classList.add('popup-add_opened');
})

function closeAdd () {
  popupAdd.classList.toggle('popup-add_opened');
}
closePopupAdd.addEventListener('click', closeAdd);
//3 попап 
const popupImg = document.querySelector('.popup-img');
const imgOpen = document.querySelector('.elements__place');
const closePopupImg = document.querySelector('.popup-img__close');

function closeImg () {
  popupImg.classList.remove('popup-img_opened')
}
closePopupImg.addEventListener('click', closeImg);
//open popup img
const openPopupImg = (evt) => {
  popupImg.classList.add('popup-img_opened');
  const popupImgWindow = document.querySelector('.popup-img__window');
  const popupImgName = document.querySelector('.popup-img__img-name');
  popupImgWindow.src = evt.target.src;
  popupImgWindow.alt = evt.target.alt;
  popupImgName.textContent =evt.target.alt;
}
// add new elements
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
//like function
const  likeCards = (evt) => {
    evt.target.classList.toggle('elements__like_activ');
}
const removeCards = (evt) => {
  evt.target.closest('.elements__content').remove();
}

initialCards.forEach((item) => {
  const clone = eTemplate.querySelector('.elements__content').cloneNode(true);
  const eNamePlace = clone.querySelector('.elements__name-place');
  const ePlace = clone.querySelector('.elements__place');
  const ePlaceOpen = clone.querySelector('.elements__place');
  const like = clone.querySelector('.elements__like')
  const removeBut = clone.querySelector('.elements__remove');
  eNamePlace.textContent = item.name;
  ePlace.src = item.link
  ePlace.alt = item.name
//like
  like.addEventListener('click', likeCards);
//remove
  removeBut.addEventListener('click', removeCards);
//open popup img
  ePlaceOpen.addEventListener('click', openPopupImg);
//create cards
  eBody.append(clone);
})

function addElements (evt) {
     evt.preventDefault()
     const clone = eTemplate.querySelector('.elements__content').cloneNode(true);
     const eNamePlace = clone.querySelector('.elements__name-place');
     const ePlace = clone.querySelector('.elements__place');
     const like = clone.querySelector('.elements__like')
     const removeBut = clone.querySelector('.elements__remove');
     eNamePlace.textContent = inputNamePlase.value;
     ePlace.src = inputUrl.value;
     ePlace.alt = inputNamePlase.value;
     //like
     like.addEventListener('click', likeCards);
     //remove
     removeBut.addEventListener('click', removeCards);
     //open popup img
     ePlace.addEventListener('click', openPopupImg);
     //create cards
     eBody.prepend(clone);
     closeAdd();

     inputUrl.value = '';
     inputNamePlase.value = '';
  }

addForm.addEventListener('submit', addElements);





////мой черновик )))

// let arrImg = document.querySelectorAll('.elements__place')
// console.log(arrImg)
// let aImg = document.querySelector('.elements__place')
// let pImgWindow = document.querySelector('.popup-img__window');
// let pImgName = document.querySelector('.popup-img__img-name');
// let eNamePlace = document.querySelector('.elements__name-place');



//   arrImg.forEach( (item) => {
//     item.addEventListener('click', openPopupImg);
//     pImgWindow.src = item.src;
//     pImgWindow.alt = item.alt;
//     pImgName.textContent = eNamePlace.innerText;
//     console.log(aImg)
//   })



// document.addEventListener('keyup', function (event) {
//     event.preventDefault()
//     if( event.key == 'Enter') {
//         popup.classList.remove('popup_opened');
//         formSubmitHandler();
//     }
// })



// //// add new elements
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];
// // Выводит массив 
// initialCards.forEach((item) => {
//   let eTemplate = elementsContent.querySelector('#elements').content;
//   elements = elementsTemplate.querySelector('.elements__content').cloneNode(true);
  
//   elements.querySelector('.elements__name-place').textContent = item.name;
//   elements.querySelector('.elements__place').src = item.link;

//   elementsContent.append(elements);
// });

// //добавляет элемент 
//  function addElements (evt) {
//    evt.preventDefault()
//     let elementsTemplate = elementsContent.querySelector('#elements').content;
//     elements = elementsTemplate.querySelector('.elements__content').cloneNode(true);

//     elements.querySelector('.elements__name-place').textContent = inputNamePlase.value;
//     elements.querySelector('.elements__place').src = inputUrl.value;
    
//     elements.querySelector('.elements__like').addEventListener('click', function (evt) {
//       evt.target.classList.toggle('elements__like_activ');
//     })

//     elementsContent.prepend(elements);
//     closeAdd();
// }

// addForm.addEventListener('submit', addElements);

// //remove elements

// removeBut.addEventListener('click', function () {
// const listItem = removeBut.closest('.elements__content');
// listItem.remove()
// })



