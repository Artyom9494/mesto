let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__Edit-Button');
let userName = document.querySelector('.profile__name');
let userInfo = document.querySelector('.profile__info');
let inputUserName = document.querySelector('.popup__name');
let inputUserInfo = document.querySelector('.popup__achievements');
let buttonSave = document.querySelector('.popup__button');
let buttonClose = document.querySelector('.popup__close');
let like = document.querySelector('.elements__like');

inputUserName.value = userName.innerHTML;
inputUserInfo.value = userInfo.innerHTML;

like.addEventListener('click', function () {
    like.classList.toggle('activ');
})
editButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
});

buttonSave.addEventListener('click', function (e) {
    e.preventDefault();
    userName.innerHTML = inputUserName.value;
    userInfo.innerHTML = inputUserInfo.value;

    popup.classList.toggle('popup_opened')
})

buttonClose.addEventListener('click', function () { 
    popup.classList.toggle('popup_opened')
});









