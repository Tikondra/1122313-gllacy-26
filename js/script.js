var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {

    center: {lat: 59.939200, lng: 30.329200},

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
  var overlay = document.querySelector('.overlay');  
  var inputs = popupFeedback.querySelectorAll('.feedback-form__input');

  var form = popupFeedback.querySelector(".feedback-form");
  var login = popupFeedback.querySelector(".feedback-form__input_name");  

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal__show');    
    overlay.classList.add('overlay__show');
    login.focus();
  });

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal__show');
    overlay.classList.remove('overlay__show');
    popupFeedback.classList.remove('err');
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      popupFeedback.classList.remove('modal__show');
      overlay.classList.remove('overlay__show');
      popupFeedback.classList.remove('err');
    }
  });

  overlay.addEventListener('click', function() {
    popupFeedback.classList.remove('modal__show');
    overlay.classList.remove('overlay__show');
    popupFeedback.classList.remove('err');
  });

  form.addEventListener("submit", function (evt) {
    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      if (input.value == '') {

        evt.preventDefault();
        popupFeedback.classList.remove('err');
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('err');
      }
    }
  });

};

  feedback();