// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    // ... (votre configuration)
});

// owl.owlcarousel2_filter
$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a');
    var $item = $(this);
    var filter = $item.data('owl-filter');
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);
    e.preventDefault();
});

/** google_map js **/
function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Appel de la fonction d'initialisation de la carte au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    initMap();
});

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});
