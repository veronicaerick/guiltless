"use strict";
////////////////// ADD ATTRACTION to database///////////////////////////
 $(document).ready(function() {
  
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);
  
});

$(document).ready(function(){


console.log("JS Connected");
function addAttractionSuccess (result) {
  console.log("added");
}


function addAttraction (evt) {
  var attractionId = $(this).data('id');
  var nameId = $(this).data('name');
  var locationId = $(this).data('location');
  var latitudeId = $(this).data('latitude');
  var longitudeId = $(this).data('longitude');
  var ratingId = $(this).data('rating');
  var reviewId = $(this).data('review-count');
  var urlId = $(this).data('url');
  var imageurlId = $(this).data('img');
  var phoneId = $(this).data('phone');
  

  var attr = {'id': attractionId,
              'name': nameId,
              'location': locationId,
              'latitude:': latitudeId,
              'longitude': longitudeId,
              'rating': ratingId,
              'review_count': reviewId,
              'url': urlId,
              'image_url': imageurlId,
              'phone': phoneId
            }
  // console.log(addAttraction)

  $.post("/add_to_attractions", attr, addAttractionSuccess)
  $(this).find(".glyphicon-heart").css("color", "salmon");

}

$('.saveAttractionModalBtn').click(addAttraction);




function makeAttModalMap(evt){
  var resultId = $(this).data('attractionId');
  console.log(resultId);
  initMaps[resultId]();
}

function populateAttModal(evt){
  var attractionId = $(this).data('attractionId');
  var modalToModalize = $('#attractionModal'+attractionId);
  modalToModalize.on('shown.bs.modal', makeAttModalMap).modal('show');
  //map things
}

$('.triggerAttModal').on('click', populateAttModal);


///////////////////Modal Details/Map Attraction /////////////////////////////

function makeEvModalMap(evt){
  var eventId = $(this).data('eventId');
  console.log(eventId);
  initMaps[eventId]();
}

function populateEvModal(evt){
  var eventId = $(this).data('eventId');
  var modalToModalize = $('#eventModal'+eventId);
  modalToModalize.on('shown.bs.modal', makeEvModalMap).modal('show');
  //map things
}

$('.triggerEvModal').on('click', populateEvModal);

});


function initMap() {

 
    geocoder = new google.maps.Geocoder();


    var myLatLng = {lat: 40.7306, lng: -73.935242};
    var bounds = new google.maps.LatLngBounds();

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 2,
    });

    var oldMarker = new google.maps.Marker({

            position: myLatLng,
            map: map,
            title: 'Center.'
 });

        var infoWindow = new google.maps.InfoWindow({
                content: "holding..."
            });

        for (i=0; i< locations.length; i++) {

            var marker_lat = parseFloat(locations[i][0]);
            var marker_lng = parseFloat(locations[i][1]);
            var eventInfo = locations[i][2];
            eventInfo = '<p>' + eventInfo + '</p>';


            var position = new google.maps.LatLng(marker_lat, marker_lng);
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: eventInfo,
                info: eventInfo,
                icon: '/static/images/musicnote2.png'

            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.setContent(this.info);
                infoWindow.open(map, this);
            });
    }

}

var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng);
}

function errorFunction(){
    alert("Geocoder failed");
}


function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results);
        if (results[1]) {
         //formatted address
         // alert(results[0].formatted_address);
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "locality") {
                    //this is the object you are looking for
                    var address=results[0].formatted_address;
                    console.log(address);
                    break;
                }
            }
        }
        //city data
        // alert(city.long_name);
        var myCity = address;
        $("#location").val(myCity);


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }

google.maps.event.addDomListener(window, 'load', initMap);