function initMap() {
    var myLatLng = {
        lat: 40.7128,
        lng: -74.0059
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
    });

    var contentString = '<p>This is where i hid the cookies.</p>';

    var infowindow = new google.maps.InfoWindow({content: contentString});

    var marker = new google.maps.Marker({position: myLatLng, map: map, title: 'Hello World!'});

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

$('.datepicker1').click(function() {
    $('.datepicker1').datepicker("show").on('changeDate', function() {
        $('.datepicker1').datepicker("hide");
    });
});

$('.datepicker2').click(function() {
    $('.datepicker2').datepicker("show").on('changeDate', function() {
        $('.datepicker2').datepicker("hide");
    });
});
// $.ajax({
//     url: "https://data.cityofnewyork.us/resource/fhrw-4uyv.json",
//     type: "GET",
//     data: {
//       "$limit" : 500,
//       "$$app_token" : "fgkGWiGFBnOMSuQ60qiJwMw1g"
//     }
// }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });
