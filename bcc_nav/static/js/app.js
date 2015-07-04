function initialize() {

    function addMarker(theposition, themap, theicon, thetitle, theinfo) {

        if (theicon == 'default') {
            theicon = '/static/img/icon1.png';
        }

        var contentString = '<div id="content">' + theinfo + '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: theposition,
            map: themap,
            icon: theicon,
            title: thetitle
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(themap,marker);
        });

    }

    var mapOptions = {
        center: { lat: -27.480329, lng: 153.0245508},
        zoom: 13
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    addMarker(new google.maps.LatLng(-27.480329,153.0245508), map, 'default', 'Hello World!', 'content');

    for (i = 0; i < bikerackdata.length; i++) {
        console.log(bikerackdata[i][0]);
    }


}

google.maps.event.addDomListener(window, 'load', initialize);