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



// 2 попап доступы
let popupAdd = document.querySelector('.popup-add');
let editElements = document.querySelector('.profile__addbutton');
let inputNamePlase = document.querySelector('.popup-add__input_value_name-plase');
let inputUrl = document.querySelector('.popup-add__input_value_url');
let closePopupAdd = document.querySelector('.popup-add__close');
let addBut = document.querySelector('.popup-add__button');
let addForm = popupAdd.querySelector('.popup-add__form');
let eBody = document.querySelector('.elements');
let eTemplate = document.querySelector('#elements').content;
let eContent = document.querySelector('.elements__content');
// второй попап функционал
editElements.addEventListener('click', () => {
  popupAdd.classList.add('popup-add_opened');
})

function closeAdd () {
  popupAdd.classList.toggle('popup-add_opened');
}
closePopupAdd.addEventListener('click', closeAdd);
//3 попап 
let popupImg = document.querySelector('.popup-img');
let openImg = document.querySelector('.elements__place');
let closePopupImg = document.querySelector('.popup-img__close');

function closeImg () {
  popupImg.classList.remove('popup-img_opened')
}
closePopupImg.addEventListener('click', closeImg);
//open popup img
let openPopupImg = (evt) => {
  popupImg.classList.add('popup-img_opened');
  let popupImgWindow = document.querySelector('.popup-img__window');
  let popupImgName = document.querySelector('.popup-img__img-name');
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
let  likeCards = (evt) => {
    evt.target.classList.toggle('elements__like_activ');
}
let removeCards = (evt) => {
  evt.target.closest('.elements__content').remove();
}

initialCards.forEach((item) => {
  let clone = eTemplate.querySelector('.elements__content').cloneNode(true);
  let eNamePlace = clone.querySelector('.elements__name-place');
  let ePlace = clone.querySelector('.elements__place');
  let ePlaceOpen = clone.querySelector('.elements__place');
  let like = clone.querySelector('.elements__like')
  let removeBut = clone.querySelector('.elements__remove');
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
     let clone = eTemplate.querySelector('.elements__content').cloneNode(true);
     let eNamePlace = clone.querySelector('.elements__name-place');
     let ePlace = clone.querySelector('.elements__place');
     let ePlaceOpen = clone.querySelector('.elements__place');
     let like = clone.querySelector('.elements__like')
     let removeBut = clone.querySelector('.elements__remove');
     eNamePlace.textContent = inputNamePlase.value;
     ePlace.src = inputUrl.value;
     ePlace.alt = inputNamePlase.value;
     //like
     like.addEventListener('click', likeCards);
     //remove
     removeBut.addEventListener('click', removeCards);
     //open popup img
     ePlaceOpen.addEventListener('click', openPopupImg);
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



