function displayDate() {
    let dateElem = document.getElementById("date");
    let today = new Date();
    let options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
    dateElem.textContent = today.toLocaleDateString("en-US", options);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    displayDate();
  });
  
  function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
  }
  
  const x = document.getElementById("hamburger-button");
  x.onclick = toggleMenu;
  
  document.getElementById("last-updated").textContent = document.lastModified;
  
  function initMap() {
    // Define the location of your business
    const businessLocation = { lat: 15.654213, lng: -85.998769 };
  
    // Create a map centered on the business location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: businessLocation,
    });
  
    // Add a marker at the business location
    const marker = new google.maps.Marker({
      position: businessLocation,
      map: map,
      title: "Juice Mix HN",
    });
  }

  
  // Load the Google Maps API script and call the initMap function when it's loaded
  (function () {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMUg5me-aJEHBFuM26VZU_aBDxCrUXvFY&callback=initMap`;
    
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  })();