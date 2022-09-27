const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imgs = document.querySelector('.image');
const dots = document.querySelector('.dots');
const dots_item = document.querySelectorAll('.dots');
const wrapper = document.querySelector('.wrapper');
let index = 0;
let images = ['mountains', 'car', 'forest'];


function createImage(val) {
  index += val;
  if(index > images.length - 1) index = 0;
  if(index < 0) index = 2;
  imgs.innerHTML = `<img src="img/${images[index]}.jpg" alt="picture"/>`;
  wrapper.prepend(imgs);
  moveDots(index);
}

function createDots() {
  for(let j = 0; j < images.length; j++) {
    let dot = document.createElement('span'); 
	  dot.classList.add('dot');									
	  dots.append(dot);
  }
}

function moveDots(index) {
  for(let j = 0; j < images.length; j++) {
    dots.children[j].className = dots.children[j].className.replace(" active", "");
  }
  dots.children[index].classList += " active";
}


createDots(); 
document.addEventListener('DOMContentLoaded', createImage(index), false);
prev.addEventListener('click', (e) => createImage(-1))
next.addEventListener('click', (e) => createImage(+1))