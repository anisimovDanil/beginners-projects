const str = '0123456789ABCDEF';
let hex = () => str[Math.floor(Math.random() * str.length)];

function colors() {
  let color = "#" + hex() + hex() + hex() + hex() + hex() + hex();
  document.querySelector('.clock').style.backgroundColor = color;
  setTimeout(colors, 5000);
}

export default colors;