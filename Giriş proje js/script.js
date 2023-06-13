document.addEventListener("DOMContentLoaded", function() {
    var name = prompt("İsminizi girin:");
    var welcomeText = document.getElementById("welcomeText");
    var currentTime = document.getElementById("currentTime");
  
    welcomeText.innerHTML = "Hoş geldin, " + name + "!";
    currentTime.innerHTML = "Şu anki tarih ve saat: " + getCurrentDateTime();
  });
  
  function getCurrentDateTime() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  }
  