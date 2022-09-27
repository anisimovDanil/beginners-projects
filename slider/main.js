const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imgs = document.querySelector('.image');
const dots = document.querySelector('.dots');
const wrapper = document.querySelector('.wrapper');
const files_images_name = ['mountains', 'car', 'forest', 'polar_light']; 

let index = 0;

function activateSlider(val) {
  index += val;
  if(index > files_images_name.length - 1) index = 0;
  if(index < 0) index = 2;
  imgs.innerHTML = `<img src="img/${files_images_name[index]}.jpg" alt="picture"/>`;
  wrapper.prepend(imgs);
  moveDots(index);
}

function createDots() {
  for(let j = 0; j < files_images_name.length; j++) {
    let dot = document.createElement('span'); 
	  dot.classList.add('dot');									
	  dots.append(dot);
  }
}

function moveDots(index) {
  for(let j = 0; j < files_images_name.length; j++) {
    dots.children[j].className = dots.children[j].className.replace(" active", "");
  }
  dots.children[index].classList += " active";
}


createDots(); 
activateSlider(index);
prev.addEventListener('click', (e) => activateSlider(-1));
next.addEventListener('click', (e) => activateSlider(+1));