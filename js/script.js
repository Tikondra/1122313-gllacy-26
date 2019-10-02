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
  let submitBtn = popupFeedback.querySelector('.feedback-form__btn');
  let inputs = popupFeedback.querySelectorAll('.feedback-form__input');

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal__show');
    popupFeedback.classList.add('anim');
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

  submitBtn.addEventListener('click', function() {

    for (var i = 0; i < inputs.length; i++) {

      var input = inputs[i];

      if (input.value == '') {

        popupFeedback.classList.remove('err');
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add('err');

        // popupFeedback.animate([
        //   {transform: 'translateX(2%)'},
        //   {transform: 'translateX(-2%)'},
        //   {transform: 'translateX(2%)'},
        //   {transform: 'translateX(-2%)'}
        //   ], 100);             
      }
    }
  });

};

  feedback();