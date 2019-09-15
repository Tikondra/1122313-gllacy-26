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

var popup = document.querySelector('.modal-feedback');
var openPopupButton = document.querySelector('.map-contacts__link');
var closePopupButton = popup.querySelector('.feedback-form__btn_close');
var overlay = document.querySelector('body');

openPopupButton.addEventListener('click', function (evt) {

    evt.preventDefault();
    popup.classList.add('modal__show');
    overlay.classList.add('overlay');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal__show');
    overlay.classList.remove('overlay');
});

document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
        popup.classList.remove('modal__show');
        overlay.classList.remove('overlay');
    }    
});

