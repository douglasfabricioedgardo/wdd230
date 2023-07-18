

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.650770, lng:  -86.012248 },
    zoom: 10,
  });
  const marker = new google.maps.Marker({
    position: { lat: 15.650770, lng:  -86.012248 },
    map: map,
    title: "Tocoa",
  });
}


