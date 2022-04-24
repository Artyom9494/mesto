let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let userName = document.querySelector('.profile__name');
let userInfo = document.querySelector('.profile__info');
let inputUserName = document.querySelector('.popup__input_mod-name-mod-value');
let inputUserInfo = document.querySelector('.popup__input_mod-info-mod-value');
// С такими модификатором как вы просили не пропускает на проверку ревьюеру пишет что не по БЭМ-name_mod-value
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

buttonSave.addEventListener('click', function (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
    closePopup();
})

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = inputUserName.value;
    userInfo.textContent = inputUserInfo.value;
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