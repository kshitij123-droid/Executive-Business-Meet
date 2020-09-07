var morningtime = 7;
var noon = 12;
var lunchtime = 12;
var breaktime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "brussels.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var businessmeetJS = document.getElementById('businessmeet');
  
  if (time == partytime)
  {
    image = "barcelona.png";
    messageText = "party time!";
  }
  else if (time == morningtime)
  {
    image = "lisbon.jpg";
    messageText = "lets startup!";
  }
  else if (time == lunchtime)
  {
    image = "rome.jpg";
    messageText = "lunch business meet";
  }
  else if (time == breaktime)
  {
    image = "Berlin.jpg";
    messageText = "businessbreak!";
  }
  else if (time < noon)
  {
    image = "London.jpg";
    messageText = "london businessmeet!";
  }
  else if (time >= evening)
  {
    image = "NewYork.jpg";
    messageText = "NewYork coffee business meet!";
  }
  else
  {
    image = "TelAviv.jpg";
    messageText = "Tel-Aviv tea business meet!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  businessmeetJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var businessmorningtime =  document.getElementById("businessmorningtime");

var businessmorningevent = function()
{
    businessmorning = businessmorningtime.value;
};

businessmorningtime.addEventListener("change", businessmorningevent);


// Activates Lunch selector
var businessafternoontime =  document.getElementById("businessafternoontime");

var businessafternoonevent = function()
{
    businessafternoon = businessafternoontime.value;
};

businessafternoontime.addEventListener("change", businessafternoonevent);


// Activates Nap-Time selector
var businesseveningtime =  document.getElementById("businesseveningtime");

var businesseveningevent = function()
{
    businessevening = businesseveningtime.value;
};

businesseveningtime.addEventListener("change", businesseveningevent);