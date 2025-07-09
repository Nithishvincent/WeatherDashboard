// Mock weather data for custom cities
const weatherData = {
  delhi: { temp: "32°C", condition: "Sunny" },
  mumbai: { temp: "29°C", condition: "Humid" },
  bangalore: { temp: "25°C", condition: "Cloudy" },
  chennai: { temp: "31°C", condition: "Rainy" }
};
// Background colors for weather conditions
const backgrounds = {
  Sunny: "#fff3cd",  // Light yellow
  Humid: "#d1ecf1",  // Light blue
  Cloudy: "#d3d3d3", // Light gray
  Rainy: "#add8e6"   // Light blue
};
// Function to update weather display
function showWeather(city) {
  console.log(`Showing weather for ${city}`); // Debug: Confirm function runs
  document.getElementById("city").innerText = city.charAt(0).toUpperCase() + city.slice(1);
  document.getElementById("temp").innerText = `Temperature: ${weatherData[city].temp}`;
  document.getElementById("condition").innerText = `Condition: ${weatherData[city].condition}`;
  document.body.style.backgroundColor = backgrounds[weatherData[city].condition] || "#f0f0f0";
}