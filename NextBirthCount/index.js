function calculateCountdown() {
  var day = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value) - 1; 
  var year = parseInt(document.getElementById('year').value);

  var today = new Date();
  var birthday = new Date(year, month, day);

  if (birthday.getTime() < today.getTime()) {
      birthday.setFullYear(today.getFullYear() + 1); 
  }

  var diff = birthday.getTime() - today.getTime();
  var seconds = Math.floor(diff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);

  var remainingSeconds = seconds % 60;
  var remainingMinutes = minutes % 60;
  var remainingHours = hours % 24;
  var remainingDays = days % 30;

  var countdownMessage = months + " months, " + remainingDays + " days, " + remainingHours + " hours, " + remainingMinutes + " minutes, " + remainingSeconds + " seconds";
  document.getElementById('countdown').innerText = countdownMessage;

  setTimeout(calculateCountdown, 1000); 
}



