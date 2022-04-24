let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userInfo = document.querySelector('.profile__info');
let inputUserName = document.querySelector('.mod-name_mod-value');
let inputUserInfo = document.querySelector('.mod-name_mod-value');
let buttonSave = document.querySelector('.popup__button');
let buttonClose = document.querySelector('.popup__close');
let like = document.querySelector('.elements__like');
let formElement = document.querySelector('.popup__form')

inputUserName.value = userName.textContent;
inputUserInfo.value = userInfo.textContent;

function closePopup () {
    popup.classList.toggle('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
}

editButton.addEventListener('click', function () {
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    popup.classList.toggle('popup_opened');
});

buttonSave.addEventListener('click', function (e) {
    e.preventDefault()
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    closePopup();
})

buttonClose.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
    if(event.target == event.currentTarget) {
        closePopup();
    }
});

document.addEventListener('keyup', function (event) {
    event.preventDefault()
    if( event.key == 'Enter') {
        popup.classList.remove('popup_opened');
        formSubmitHandler();
    }
})



formElement.addEventListener('submit', formSubmitHandler);
