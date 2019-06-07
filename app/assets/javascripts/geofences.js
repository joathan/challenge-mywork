function geoFence() {
  var lat = document.getElementById('geofence_lat').value;
  var lng = document.getElementById('geofence_lng').value;

  // if not defined create default position
  if (!lat || !lng){
    lat = -9.667267;
    lng = -35.737493;
    document.getElementById('geofence_lat').value = lat;
    document.getElementById('geofence_lng').value = lng;
  }

  var myCoords = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: myCoords,
    zoom: 14
  };

  var map = new google.maps.Map(document.getElementById('map2'), mapOptions);

  var marker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true
  });

  // refresh marker position and recenter map on marker
  function refreshMarker(){
    var lat = document.getElementById('geofence_lat').value;
    var lng = document.getElementById('geofence_lng').value;
    var myCoords = new google.maps.LatLng(lat, lng);
    marker.setPosition(myCoords);
    map.setCenter(marker.getPosition());
  }
  // when input values change call refreshMarker
  document.getElementById('geofence_lat').onchange = refreshMarker;
  document.getElementById('geofence_lng').onchange = refreshMarker;

  // when marker is dragged update input values
  marker.addListener('drag', function() {
    latlng = marker.getPosition();
    newlat=(Math.round(latlng.lat()*1000000))/1000000;
    newlng=(Math.round(latlng.lng()*1000000))/1000000;
    document.getElementById('geofence_lat').value = newlat;
    document.getElementById('geofence_lng').value = newlng;

  });
}

function initMapGeoFence(lat, lng, radius) {
  var myCoords = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: myCoords,
    zoom: 14
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myCoords,
    map: map
  });

  var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat: lat, lng: lng},
    radius: radius
  });

}








var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['(regions)']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_component']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // var circle = new google.maps.Circle(
      //     {center: geolocation, radius: position.coords.accuracy});
      // autocomplete.setBounds(circle.getBounds());
    });
  }
}
