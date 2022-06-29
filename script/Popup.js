 class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = selectorPopup;
    }

    open() {
        this._selectorPopup.classList.add('popup_opened');
    };

    close () {
        this._selectorPopup.classList.remove('popup_opened');
    };

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
        this.close();
      }
    };

    setEventListeners() {

    }
};
export default Popup