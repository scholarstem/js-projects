var city = 'miami';
var city2 = 'nashville';
var weather;
var weather2;

function setup() {
  createCanvas(500,500);
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var key = '&APPID=88b4211ed6b34dfe3e34ba994cbc8d11&units=';
  var unit = 'imperial';
  var complete = api + city + key + unit;
  var complete2 = api + city2 + key + unit;

  loadJSON(complete, gotData);
  loadJSON(complete2, gotData2);
}

function gotData(data) {
  weather = data;
}

function gotData2(data) {
  weather2 = data;
}

function draw() {
  background(220)


  if (weather){
    //console.log("Our data is loaded!")
    text('The temperature in ' + city + ' is ' + weather.main.temp + ' degrees', 50, 50);
    ellipse(100, 100, weather.main.humidity, weather.main.humidity)
    while

    text('The temperature in ' + city2 + ' is ' + weather2.main.temp + ' degrees', 50, 150);
    ellipse(100, 200, weather2.main.humidity, weather2.main.humidity)
  }
}
