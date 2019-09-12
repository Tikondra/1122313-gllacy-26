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