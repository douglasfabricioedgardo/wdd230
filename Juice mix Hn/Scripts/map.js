

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.68333, lng: -86 },
    zoom: 10,
  });
  const marker = new google.maps.Marker({
    position: { lat: 15.68333, lng: -86 },
    map: map,
    title: "Tocoa",
  });
}


