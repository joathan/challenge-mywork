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
