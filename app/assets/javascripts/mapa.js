var geocoder;
var map;
var marker;
let lat;
let lng;

getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
}

function initialize() {
  var latlng = new google.maps.LatLng(lat, lng);
  var options = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("mapa"), options);

  geocoder = new google.maps.Geocoder();

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
  });

  marker.setPosition(latlng);
}


$(document).ready(function () {
  initialize();

  function carregarNoMapa(endereco) {
    geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();

          $('#address_place').val(results[0].formatted_address);
          $('#address_lat').val(latitude);
          $('#address_lon').val(longitude);

          var location = new google.maps.LatLng(latitude, longitude);
          marker.setPosition(location);
          map.setCenter(location);
          map.setZoom(16);
        }
      }
    });
  }

  $("#btnEndereco").click(function() {
    if($(this).val() != "")
    carregarNoMapa($("#address_place").val());
  })

  $("#address_place").blur(function() {
    if($(this).val() != "")
    carregarNoMapa($(this).val());
  })

  google.maps.event.addListener(marker, 'drag', function () {
    geocoder.geocode({ 'latLng': marker.getPosition() }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          $('#address_place').val(results[0].formatted_address);
          $('#address_number').val(results[0].address_components[0].long_name);
          $('#address_bairro').val(results[0].address_components[2].long_name);
          $('#address_city').val(results[0].address_components[3].long_name);
          $('#address_state').val(results[0].address_components[4].long_name);
          $('#address_zip_code').val(results[0].address_components[6].long_name);
          $('#address_lat').val(marker.getPosition().lat());
          $('#address_lon').val(marker.getPosition().lng());
        }
      }
    });
  });

  $("#address_place").autocomplete({
    source: function (request, response) {
      geocoder.geocode({ 'address': request.term + ', Brasil', 'region': 'BR' }, function (results, status) {
        response($.map(results, function (item) {
          return {
            label: item.formatted_address,
            value: item.formatted_address,
            latitude: item.geometry.location.lat(),
            longitude: item.geometry.location.lng(),

            number: item.address_components[0].long_name,
            address: item.address_components[1].long_name,
            bairro: item.address_components[2].long_name,
            city: item.address_components[3].long_name,
            state: item.address_components[4].long_name,
            state_uf: item.address_components[4].short_name,
            zip_code: item.address_components[6].long_name,
          }
        }));
      })
    },
    select: function (event, ui) {
      $('#address_number').val(ui.item.number);
      $('#address_bairro').val(ui.item.bairro);
      $('#address_city').val(ui.item.city);
      $('#address_state').val(ui.item.state);
      $('#address_zip_code').val(ui.item.zip_code);

      $("#address_lat").val(ui.item.latitude);
      $("#address_lon").val(ui.item.longitude);
      var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
      marker.setPosition(location);
      map.setCenter(location);
      map.setZoom(16);
    }
  });
});
