const paragraph = document.getElementById('paragraph');
paragraph.style.color = 'red';

// 1- Recupere o elemento que contém o título da página e faça algo com ele,
// como alterá-lo para o nome do seu filme favorito.
const title = document.getElementById('page-title');
title.innerText = 'The hitchhiker\'s guide to the galaxy';

// 2 - Agora recupere o segundo parágrafo e use sua criatividade para
//  alterá-lo.
const secondParagraph = document.getElementById('second-paragraph');
secondParagraph.innerText = 'The answer to life the universe and everything is 42.';

// 3 - Por fim, recupere o subtítulo e altere-o também.
const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'So long and thanks for all the fish';



// 1. Adicione uma classe igual para os dois parágrafos.
// Resposta: Foi adicionada a class 'para' aos dois parágrafos.

// 2. Recupere os seus parágrafos via código _JavaScript_, usando a função
// `getElementsByClassName`;
const paragraphs = document.getElementsByClassName('para');

// 3. Altere algum estilo do primeiro deles.
paragraphs[0].style.fontSize = '1.5rem';
paragraphs[0].style.color = 'green';

// 4. Recupere o subtítulo e altere a cor dele usando a função 
// `getElementsByTagName`.
const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'red';    


const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';



// Exercício 1

function changeText() {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = "Ganhar 3.500 e estar em um empresa cabulosa!!";
};
changeText();

//Exercício 2

function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();

//Exercício 3

function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();


//Exercício 4

function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();

//Exercício 5

function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();

//Exercício 6

function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs();

