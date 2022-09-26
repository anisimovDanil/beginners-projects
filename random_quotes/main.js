const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.submit');
const obj = {
  "Питер Маршалл": "Мы стремимся к жизни без трудностей, но дубы вырастают крепкими при сильных ветрах, и алмазы образуются под высоким давлением.",
  "Генри Форд": "Когда кажется, что весь мир настроен против тебя, помни, что самолёт взлетает против ветра!",
  "Томас Эдисон": "Каждая неудавшаяся попытка — это еще один шаг вперед",
  "Оноре де Бальзак": "Общественное мнение — самая развратная из всех проституток"
}
let rand_number = null;

btn.addEventListener('click', (e) => {
  changeQuote();
})

let changeQuote = function() {
  let number = Math.floor(Math.random() * Object.keys(obj).length);
  if (rand_number !== number) {
    rand_number = number;
    let str_key = Object.keys(obj)[number];
    quote.innerHTML = obj[str_key];
    author.innerHTML = str_key;
  }
  else 
    return changeQuote();
}

changeQuote();