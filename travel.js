// Initialize the map and set default view with center coordinates and zoom level
const map = L.map('map', {
  worldCopyJump: true // Ensures map panning 
}).setView([20, 0], 2); // Centered roughly on the equator

// Load and display OpenStreetMap tiles on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// City Markers 
L.marker([35.6762, 139.6503]).addTo(map)
  .bindPopup('Tokyo, Japan');

L.marker([21.1619, -86.8515]).addTo(map)
  .bindPopup('Cancún, Mexico');

L.marker([20.2114, -87.4654]).addTo(map)
  .bindPopup('Tulum, Mexico');

L.marker([33.8076, 10.8451]).addTo(map)
  .bindPopup('Djerba, Tunisia');

L.marker([51.5074, -0.1278]).addTo(map)
  .bindPopup('London, United Kingdom');

L.marker([39.6953, 3.0176]).addTo(map)
  .bindPopup('Mallorca, Spain');

L.marker([41.3902, 2.1540]).addTo(map)
  .bindPopup('Barcelona, Spain');

L.marker([45.4647, 9.1885]).addTo(map)
  .bindPopup('Milan, Italy');

L.marker([48.8647, 2.3490]).addTo(map)
  .bindPopup('Paris, France');

L.marker([48.5734, 7.7521]).addTo(map)
  .bindPopup('Strasbourg, France');

L.marker([47.8112, 13.0332]).addTo(map)
  .bindPopup('Salzburg, Austria');

L.marker([59.3346, 18.0632]).addTo(map)
  .bindPopup('Stockholm, Sweden');

L.marker([59.4022, 13.5115]).addTo(map)
  .bindPopup('Karlstad, Sweden');

L.marker([57.7089, 11.9746]).addTo(map)
  .bindPopup('Gothenburg, Sweden');

L.marker([59.9139, 10.7522]).addTo(map)
  .bindPopup('Oslo, Norway');

L.marker([52.5200, 13.4050]).addTo(map)
  .bindPopup('Berlin, Germany');

L.marker([54.3233, 10.1228]).addTo(map)
  .bindPopup('Kiel, Germany');

L.marker([47.6779, 9.1732]).addTo(map)
  .bindPopup('Konstanz, Germany')
  .openPopup(); // This marker will have its popup open by default

L.marker([48.7758, 9.1829]).addTo(map)
  .bindPopup('Stuttgart, Germany');

L.marker([48.1351, 11.5820]).addTo(map)
  .bindPopup('Munich, Germany');

L.marker([42.6951, 27.7104]).addTo(map)
  .bindPopup('Sunny Beach, Bulgaria');

L.marker([36.8969, 30.7133]).addTo(map)
  .bindPopup('Antalya, Turkey');
