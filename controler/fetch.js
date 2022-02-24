
import {nevStr} from './getValue.js'
import {showData} from '../view/showData.js'
export const ansve = ''

export async function getData(nevStr) {  
    const res = await fetch(`http://api.weatherstack.com/current?access_key=5e0116c7252bfda72d7268b4c6065adb&query=query=${nevStr}`)
    const data = await res.json()
    ansve = data      
    showData(ansve)
  }