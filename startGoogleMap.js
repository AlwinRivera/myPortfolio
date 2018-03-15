  function initMap() {
        var uluru = {lat: 10.3229367, lng: 123.9170274};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
          });
      }