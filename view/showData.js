import {ansve} from '../controler/fetch.js'
export function showData(arr) {
const city = document.querySelector('.item_0')
 city.innerText = arr.location.name
 const country = document.querySelector('.item_1')
 country.innerText = arr.location.country
 const localTime = document.querySelector('.item_2')
 localTime.innerText = arr.location.localtime
 const temperature = document.querySelector('.item_3')
 temperature.innerText = `${arr.current.temperature} \u2103` 
 const windSpeed = document.querySelector('.item_4')
  windSpeed.innerText = `${arr.current.wind_speed} km/h` 
  const wind2 = document.querySelector('.item_5')                  
  wind2.innerText = arr.current.wind_dir  
  const humidity = document.querySelector('.item_6')
  humidity.innerText = `${arr.current.humidity} %`  
  }