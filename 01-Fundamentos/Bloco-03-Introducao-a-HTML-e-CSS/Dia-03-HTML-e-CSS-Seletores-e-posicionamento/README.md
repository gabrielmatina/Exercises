Vamos praticar o que aprendemos.
Copie o código HTML abaixo e faça o que for pedido:
index.html
Copiar
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
1 - Adicione uma lista ordenada dos 3 melhores sites que você conhece.
2 - Crie um arquivo no mesmo diretório e nomeie-o de 'style.css'.
3 - Nesse arquivo .css, adicione os estilos para que:
O texto das tags 'h1' e 'p' estejam centralizados.
A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
A fonte do item mude quando ele for clicado.
4 - Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
5 - No 'style.css', adicione a propriedade 'list-style: none' para ambas as listas.
Dica: Nesse link, você irá encontrar a documentação sobre todas as pseudoclasses do CSS.
🚀 Se liga nesse foguete!
Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀
🚀 Para fixar II
Para o próximo exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudoclasses para individualizar cada elemento!
index.html
Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudoclasses</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>
1 - Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.
2 - Faça cada div ter uma cor própria.
3 - Estilize cada uma das tags h3.
4 - Faça a terceira div ser maior que as demais.
5 - Deixe as tags ímpares h3 com o texto em itálico.



E aí? Viu o quão incrível o CSS pode ser?! Agora, para fixar ainda mais o conteúdo, vamos exercitar.
index.html
Copiar
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
Crie o arquivo style.css e resolva os seguintes exercícios:
1 - Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
2 - Faça todas as tags Header (h1, h2...) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
3 - Faça todas as li's terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
4 - Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir "java*" no texto, utilize uma cor de fundo rosa.
5 - (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte "temática do site"
Dica 1: Utilize o seletor :hover para controlar o passar do mouse.
Dica 2: Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).






