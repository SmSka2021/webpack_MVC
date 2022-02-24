import './style.css';
import { render } from './view/render.js';
import { getItem } from './controler/getValue.js';
export { inpVal1, inpVal2 };
var btn = document.querySelector('#btn');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var inpVal1 = input1.value;
var inpVal2 = input2.value;

function startApi() {
  render();
  btn.addEventListener('click', getItem);
  input2.addEventListener('change', getItem);
  input1.addEventListener('change', getItem);
}

startApi();