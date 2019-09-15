var map;


function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {

        center: {lat: 59.939284, lng: 30.328352},

        zoom: 16
    });

    var imgpin = 'img/pin.svg'  
    var marker = new google.maps.Marker({
    
        position: {lat: 59.938495, lng: 30.322907},
        
        map: map,    
        title: 'Gllacy Shop',
        icon: imgpin
    });
}

function feedback() {

    var popupFeedback = document.querySelector('.modal-feedback');
    var openPopupButton = document.querySelector('.map-contacts__link');
    var closePopupButton = popupFeedback.querySelector('.feedback-form__btn_close');
    var overlay = document.querySelector('body');

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupFeedback.classList.add('modal__show');
        overlay.classList.add('overlay');
    });

    closePopupButton.addEventListener('click', function () {
        popupFeedback.classList.remove('modal__show');
        overlay.classList.remove('overlay');
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupFeedback.classList.remove('modal__show');
            overlay.classList.remove('overlay');
        }    
    });
};

function search() {
    var popupSearch = document.querySelector('.search-form');
    var openPopupButton = document.querySelector('.header-auth__link_search');

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popupSearch.classList.add('search-form_show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popupSearch.classList.remove('search-form_show');            
        }    
    });
}

function enter() {
    var popup = document.querySelector('.enter-form');
    var openPopupButton = document.querySelector('.header-auth__link_enter');

    openPopupButton.addEventListener('click', function (evt) {

        evt.preventDefault();
        popup.classList.add('enter-form_show');        
    });

    document.addEventListener('keydown', function (evt) {

        if (evt.keyCode === 27) {
            popup.classList.remove('enter-form_show');            
        }    
    });
}


feedback();
search();
enter();