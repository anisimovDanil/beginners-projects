const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imgs = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.dot');
const wrapper = document.querySelector('.wrapper');
let index = 0;


function active_slider(val) {
  index += val;
  for(var i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }

  if(index > imgs.length - 1) index = 0;
  if(index < 0) index = 2;

  imgs[index].style.display = "block";


  for(let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  dots[index].classList += " active";
}

document.addEventListener('DOMContentLoaded', active_slider(index), false);
  
  prev.addEventListener('click', (e) => active_slider(-1))
  next.addEventListener('click', (e) => active_slider(+1))





















/*const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.getElementsByClassName('image');
//const dots = document.getElementsByClassName('dot');

let index = 0;

function acive_slider(i) {
  index += i;
  for(i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }*/

  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  /*if(index > images.length - 1) index = 0;
  else if(index < 0) index = images.length - 1;
  
  images[index].style.display = 'block';
  //dots[index].className += " active";
  
}

window.addEventListener("onload", acive_slider(index));
prev.addEventListener('click', (e) => acive_slider(-1))
next.addEventListener('click', (e) => acive_slider(+1))*/