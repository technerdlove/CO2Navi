var currentPosition;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storePosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function storePosition(position) {
    currentPosition = position;
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
}

getLocation();








// google maps auto complete

    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch
    var map, places, infoWindow;
    var markers = [];
    var autocomplete;
    var directionsService;

    function initMap() {

        directionsService = new google.maps.DirectionsService;

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
            /* @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {});

        autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        /*document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);*/
      }


      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        var destinationPlace = autocomplete.getPlace();
        if (destinationPlace.address_components[0]) {
            // https://developers.google.com/maps/documentation/javascript/directions#TravelModes
            calculateAndDisplayRoute(directionsService, destinationPlace.address_components[0].long_name, 'TRANSIT');

        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }


    function calculateAndDisplayRoute(directionsService, destinationName, travelMode) {
        directionsService.route({
          origin: currentPosition.coords.latitude + ", " + currentPosition.coords.longitude,
          destination: destinationName,
          travelMode: travelMode //'DRIVING' 
        }, function(response, status) {
          if (status === 'OK') {
            console.log(JSON.stringify(response));
          } else {
            console.log('Directions request failed due to ' + status);
          }
        });
      }