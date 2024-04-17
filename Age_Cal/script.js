
var intervalId;

function calculateAge() {
    var birthDay = parseInt(document.getElementById('date').value);
    var birthMonth = parseInt(document.getElementById('month').value);
    var birthYear = parseInt(document.getElementById('year').value);

     if (birthDay < 1 || birthDay > 31 || birthMonth < 1 || birthMonth > 12 || birthYear < 1900 || birthYear > 2099) {
        alert("Please enter a valid date of birth.");
        return;
    }

    var updateAge = function() {
        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1; 
        var currentYear = currentDate.getFullYear();
        var currentHour = currentDate.getHours();
        var currentMinute = currentDate.getMinutes();
        var currentSecond = currentDate.getSeconds();

        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (birthDay > currentDay) {
            currentMonth -= 1;
            currentDay += daysInMonth[birthMonth - 1];
        }

        if (birthMonth > currentMonth) {
            currentYear -= 1;
            currentMonth += 12;
        }

        var calculatedDay = currentDay - birthDay;
        var calculatedMonth = currentMonth - birthMonth;
        var calculatedYear = currentYear - birthYear;

        var ageMessage = 'Your Age is ' + calculatedYear + ' Years ' + calculatedMonth + ' Months ' + calculatedDay + ' Days, ' + currentHour + ' Hours ' + currentMinute + ' Minutes ' + currentSecond + ' Seconds';
        document.getElementById('age').innerHTML = ageMessage;
    };

    clearInterval(intervalId);

    updateAge();

    intervalId = setInterval(updateAge, 1000);
}