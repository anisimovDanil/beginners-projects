const app = document.querySelector('.app');
const container = document.querySelector('.container');
const color_code = document.querySelector('.color-code'); 
const btn = document.querySelector('.submit');
const str = '0123456789ABCDEF';

let hex = () => str[Math.floor(Math.random() * str.length)];

btn.addEventListener('click', (e) => {
  let color = "#" + hex() + hex() + hex() + hex() + hex() + hex();
  color_code.innerHTML = color;
  container.style.backgroundColor = color;
});