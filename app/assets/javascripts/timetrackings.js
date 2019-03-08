let lat_origin;
let lng_origin;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMapTimetracking);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function initMapTimetracking(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  lat_origin = lat;
  lng_origin = lng;

  document.getElementById('timetracking_lat').value = lat;
  document.getElementById('timetracking_lng').value = lng;

  let myCoords = new google.maps.LatLng(lat, lng);
  let mapOptions = {
    center: myCoords,
    zoom: 16
  };

  let map = new google.maps.Map(document.getElementById('map'), mapOptions);

  let marker = new google.maps.Marker({
    position: myCoords,
    map: map,
    draggable: true
  });

  // refresh marker position and recenter map on marker
  function refreshMarker(){
    var lat = document.getElementById('timetracking_lat').value;
    var lng = document.getElementById('timetracking_lng').value;
    var myCoords = new google.maps.LatLng(lat, lng);
    marker.setPosition(myCoords);
    map.setCenter(marker.getPosition());
  }
  // when input values change call refreshMarker
  document.getElementById('timetracking_lat').onchange = refreshMarker;
  document.getElementById('timetracking_lng').onchange = refreshMarker;

  // when marker is dragged update input values
  marker.addListener('drag', function() {
    latlng = marker.getPosition();
    newlat=(Math.round(latlng.lat()*1000000))/1000000;
    newlng=(Math.round(latlng.lng()*1000000))/1000000;
    document.getElementById('timetracking_lat').value = newlat;
    document.getElementById('timetracking_lng').value = newlng;
  });
}

$(document).ready(function(){

  setInterval(function(){
    location = ''
  }, 500000);



  $("#timetracking_collaborator_id").change(function(){
    $.get("http://localhost:3000/collaborators/search?id="+this.value, function(data){
      $.get("http://localhost:3000/timetrackings/distance?radius="+data.radius+
      "&lat="+data.lat+
      "&lng="+data.lng+
      "&lat_origin="+lat_origin+
      "&lng_origin="+lng_origin, function(result){
        $("#submit").attr('disabled', result);
      });
    });
  });
});
