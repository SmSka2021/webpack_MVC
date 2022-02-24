import './style.css';
import {render} from './view/render.js';
import {getItem} from './controler/getValue.js';
export {inpVal1, inpVal2}

    const btn = document.querySelector('#btn')
    const input1 = document.querySelector('#input1')
    const input2 = document.querySelector('#input2')
    let inpVal1 = input1.value 
    let inpVal2 = input2.value     

function startApi(){  
    render()     
    btn.addEventListener('click', getItem)
    input2.addEventListener('change', getItem)
    input1.addEventListener('change', getItem)      
}
startApi()



    