let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userInfo = document.querySelector('.profile__info');
let inputUserName = document.querySelector('.popup__input_value-name');
let inputUserInfo = document.querySelector('.popup__input_value-info');
let buttonSave = document.querySelector('.popup__button');
let buttonClose = document.querySelector('.popup__close');
let like = document.querySelector('.elements__like');
let formElement = document.querySelector('.popup__form')


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

// document.addEventListener('keyup', function (event) {
//     event.preventDefault()
//     if( event.key == 'Enter') {
//         popup.classList.remove('popup_opened');
//         formSubmitHandler();
//     }
// })