const itemsWrapper = document.querySelector('.items-wrapper')

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hidden" src="${img}" alt=""></img>`
}

const itemsCollection = document.getElementsByClassName('img');

itemsCollection[0].classList.remove('hidden');