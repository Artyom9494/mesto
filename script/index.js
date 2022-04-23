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

function clos () {
    popup.classList.toggle('popup_opened');
};
function inputValue () {
    userName.innerHTML = inputUserName.value;
    userInfo.innerHTML = inputUserInfo.value;
};

editButton.addEventListener('click', function () {
    popup.classList.toggle('popup_opened');
});

buttonSave.addEventListener('click', function () {
    inputValue()
    clos();
})

buttonClose.addEventListener('click', function () { 
    clos();
});

popup.addEventListener('click', function (event) {
    if(event.target == event.currentTarget) {
        clos();
    }
});

document.addEventListener('keyup', function (event) {
    if( event.key == 'Enter') {
        inputValue()
        popup.classList.remove('popup_opened');
    }
})

