Exercicios de fixação

Parte II - Seletores de elementos
Para fixar - getElementById


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







Funções de manipulação do DOM
É hora de aplicar seus conhecimentos em manipular os elementos do HTML!
A seguir, você verá um trecho de código HTML e CSS.
Crie um arquivo HTML dentro do diretório exercises/javascript-dom-eventos-e-web-storage_1 e copie o código a seguir.
Leia as instruções que estão dentro de um comentário na tag <script>.
Não se esqueça de fazer um commit a cada exercício!



        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
        4. Crie e execute uma função que corrija o texto da tag <h1>.
        5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */
