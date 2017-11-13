var environment   = process.env.NODE_ENV || 'development'
var configuration = require('./knexfile')[environment]
var database      = require('knex')(configuration)
var Forecasts = require('./lib/models/forecast')
pry = require('pryjs')
var request = require('request');

function updateForecasts(){

  request({url:'https://peaceful-beach-96299.herokuapp.com/http://opensnow.com/api/public/1.0/locations/data?apikey=where&lids=2,24,5,6,7,8,3,1,12,13,14,15,16&type=json', headers: {'origin': 'www.google.com'}}, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        var parsed = JSON.parse(response.body)
        sanitizeData(parsed)
      });
}
var sanitized_data = {}

function sanitizeData(data){
      var corresponding = {
        "2":"1",
        "24":"2",
        "5":"3",
        "6":"4",
        "7":"5",
        "8":"6",
        "3":"7",
        "1":"8",
        "12":"9",
        "13":"10",
        "14":"11",
        "15":"12",
        "16":"13"
      }
      var data_arr =  Object.keys(data.results).map(function(_) { return data.results[_]; })
      for(let i=0;i<data_arr.length;i++){
         sanitized_data[i] = {
         opensnow_id: data_arr[i].meta.location_id,
         current_temp: data_arr[i].current_conditions.temp,
         current_wind_dir: data_arr[i].current_conditions.wind_dir,
         current_wind_speed: data_arr[i].current_conditions.wind_speed,
         period_one_dow: data_arr[i].forecast.period1.dow,
         period_one_date: data_arr[i].forecast.period1.date,
         period_one_day_snow: data_arr[i].forecast.period1.day.snow,
         period_one_day_weather: data_arr[i].forecast.period1.day.weather,
         period_one_day_wind_speed: data_arr[i].forecast.period1.day.wind_speed,
         period_one_day_wind_dir: data_arr[i].forecast.period1.day.wind_dir,
         period_one_day_temp: data_arr[i].forecast.period1.day.temp,
         period_one_night_snow: data_arr[i].forecast.period1.night.snow,
         period_one_night_weather: data_arr[i].forecast.period1.night.weather,
         period_one_night_wind_speed: data_arr[i].forecast.period1.night.wind_speed,
         period_one_night_wind_dir: data_arr[i].forecast.period1.night.wind_dir,
         period_one_night_temp: data_arr[i].forecast.period1.night.temp,
         period_two_dow: data_arr[i].forecast.period2.dow,
         period_two_date: data_arr[i].forecast.period2.date,
         period_two_day_snow: data_arr[i].forecast.period2.day.snow,
         period_two_day_weather: data_arr[i].forecast.period2.day.weather,
         period_two_day_wind_speed: data_arr[i].forecast.period2.day.wind_speed,
         period_two_day_wind_dir: data_arr[i].forecast.period2.day.wind_dir,
         period_two_day_temp: data_arr[i].forecast.period2.day.temp,
         period_two_night_snow: data_arr[i].forecast.period2.night.snow,
         period_two_night_weather: data_arr[i].forecast.period2.night.weather,
         period_two_night_wind_speed: data_arr[i].forecast.period2.night.wind_speed,
         period_two_night_wind_dir: data_arr[i].forecast.period2.night.wind_dir,
         period_two_night_temp: data_arr[i].forecast.period2.night.temp,
         period_three_dow: data_arr[i].forecast.period3.dow,
         period_three_date: data_arr[i].forecast.period3.date,
         period_three_day_snow: data_arr[i].forecast.period3.day.snow,
         period_three_day_weather: data_arr[i].forecast.period3.day.weather,
         period_three_day_wind_speed: data_arr[i].forecast.period3.day.wind_speed,
         period_three_day_wind_dir: data_arr[i].forecast.period3.day.wind_dir,
         period_three_day_temp: data_arr[i].forecast.period3.day.temp,
         period_three_night_snow: data_arr[i].forecast.period3.night.snow,
         period_three_night_weather: data_arr[i].forecast.period3.night.weather,
         period_three_night_wind_speed: data_arr[i].forecast.period3.night.wind_speed,
         period_three_night_wind_dir: data_arr[i].forecast.period3.night.wind_dir,
         period_three_night_temp: data_arr[i].forecast.period3.night.temp,
         period_four_dow: data_arr[i].forecast.period4.dow,
         period_four_date: data_arr[i].forecast.period4.date,
         period_four_day_snow: data_arr[i].forecast.period4.day.snow,
         period_four_day_weather: data_arr[i].forecast.period4.day.weather,
         period_four_day_wind_speed: data_arr[i].forecast.period4.day.wind_speed,
         period_four_day_wind_dir: data_arr[i].forecast.period4.day.wind_dir,
         period_four_day_temp: data_arr[i].forecast.period4.day.temp,
         period_four_night_snow: data_arr[i].forecast.period4.night.snow,
         period_four_night_weather: data_arr[i].forecast.period4.night.weather,
         period_four_night_wind_speed: data_arr[i].forecast.period4.night.wind_speed,
         period_four_night_wind_dir: data_arr[i].forecast.period4.night.wind_dir,
         period_four_night_temp: data_arr[i].forecast.period4.night.temp,
         period_five_dow: data_arr[i].forecast.period5.dow,
         period_five_date: data_arr[i].forecast.period5.date,
         period_five_day_snow: data_arr[i].forecast.period5.day.snow,
         period_five_day_weather: data_arr[i].forecast.period5.day.weather,
         period_five_day_wind_speed: data_arr[i].forecast.period5.day.wind_speed,
         period_five_day_wind_dir: data_arr[i].forecast.period5.day.wind_dir,
         period_five_day_temp: data_arr[i].forecast.period5.day.temp,
         period_five_night_snow: data_arr[i].forecast.period5.night.snow,
         period_five_night_weather: data_arr[i].forecast.period5.night.weather,
         period_five_night_wind_speed: data_arr[i].forecast.period5.night.wind_speed,
         period_five_night_wind_dir: data_arr[i].forecast.period5.night.wind_dir,
         period_five_night_temp: data_arr[i].forecast.period5.night.temp,
         forecast_id: corresponding[data_arr[i].meta.location_id],
        }
    }
    sendUpdateToDatabase()
  }


function sendUpdateToDatabase(){
  var finalData =  Object.keys(sanitized_data).map(function(_) { return sanitized_data[_]; })
  for(i=0;i<finalData.length;i++){
    // database('resorts').where({open_snow_id:finalData[i].opensnow_id}).select('id').then(function (data){finalData[i].forecast_id= JSON.parse(JSON.stringify(data))[0].id.toString()}).then(Forecasts.update(finalData[i]))
    Forecasts.update(finalData[i])
  }
}

module.exports = {
  updateForecasts:updateForecasts
}
