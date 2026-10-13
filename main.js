const productCards = document.querySelectorAll ('.products__card');
const changeColorAllButtonCard = document.querySelector ('.grayColorButton');
const grayColor = '#878787';
const metllicGoldColor = '#D2B55B';



changeColorAllButtonCard.addEventListener('click',() => {
  productCards.forEach((card) => card.style.backgroundColor = grayColor)
})



const firstProductCards = document.querySelector ('.products__card');
const changeColorFirstButtonCard = document.querySelector ('.metllicGoldColorButton');

changeColorFirstButtonCard.addEventListener('click',() => {
  firstProductCards.style.backgroundColor = metllicGoldColor;
})



const openGoogleButtun = document.querySelector('#open-google');

openGoogleButtun.addEventListener('click', openGoogle)
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Goole?');

  if (answer === true) {
  window.open('https://google.com')
  } else {
  return;
  }
}



const outPutLogButtun = document.querySelector('#output-console-log');

outPutLogButtun.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(messege) {
  alert(messege)
  console.log(messege)
}



const outputTitleOnHover = document.querySelector('.catalog__title');

outputTitleOnHover.addEventListener('mouseenter', () => {
  console.log(outputTitleOnHover.textContent)
});




const ChangeTheButtunColor = document.querySelector('.dark-red-buttun');
if (ChangeTheButtunColor){
  ChangeTheButtunColor.addEventListener('click', () => {
    ChangeTheButtunColor.classList.toggle('burnt-maroon-buttun');
  });
} else {
  console.error('Кнопка не найдена — проверь класс в HTML');
}