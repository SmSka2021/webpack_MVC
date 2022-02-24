
export {nevStr} 
import {getData} from './fetch'
import {inpVal1, inpVal2} from '../start.js'
let nevStr = ''
function validation (str, str2) {  
     nevStr = str[0].toUpperCase() + str.slice(1).toLowerCase() + ',' + str2[0].toUpperCase() + str2.slice(1).toLowerCase()
     getData (nevStr)    
  }
 export function getItem() {  
    validation (inpVal1, inpVal2)
    
  }
  
