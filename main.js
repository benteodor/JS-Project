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

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
