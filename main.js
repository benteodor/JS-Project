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

/*function celsiusToFahr(temperature) {
  console.log(temperature);
}
celsiusToFahr(25);
celsiusToFahr(30);*/

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9) / 5 + 32;
  console.log(fahr);
}

celsiusToFahr(25);
celsiusToFahr(30);

/*const greetingText = "Good morning!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.8673;
let weatherText =
  'The weather is ${weatherCondition} in ${userLocation} and it is ${temperature.toString} outside.';

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;*/

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    console.log(e.target.id);
  });
