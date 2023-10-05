/*function testAlert(message) {
  alert("message");
}
console.log("Test message now");*/

/*document.getElementById("greeting").innerHTML = "Hello World";*/
/*document.getElementsByClassName("product-item");
document.getElementsByTagName("p");*/
/*document.querySelector("p#weather").innerHTML = "New Value";*/
/*document.querySelector("p#weather").style.color = "red";
document.querySelector("p#weather").style.color = "#dedede";*/

/*document.querySelector("p#weather").style.margin = "100px";
document.querySelector("p#weather").style.backgroundColor = "blue";*/

/*document.querySelector("p#weather").addEventListener("click", function () {
  alert("p element clicked");
});*/

// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

/*const customer = "Sara";
let balance = 2000;

console.log("Hi, " + customer + ". Your balance is USD" + balance);

balance = balance + 200;

console.log("Hi, " + customer + ". Your new balance is USD" + balance);*/

// Greeting Section

function celsiusToFahr(temperature) {
  console.log(temperature);
}
celsiusToFahr(25);
celsiusToFahr(30);

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32;
  return fahr;
}

celsiusToFahr(25);
celsiusToFahr(30);

const greetingText = "Good afternoon!";
const weatherCondition = "cloudy";
const userLocation = "New York";
let temperature = 22.8673;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });
