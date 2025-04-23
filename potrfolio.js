// script.js

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci pour votre message, Nogaye vous répondra bientôt !");
    this.reset();
  });
  