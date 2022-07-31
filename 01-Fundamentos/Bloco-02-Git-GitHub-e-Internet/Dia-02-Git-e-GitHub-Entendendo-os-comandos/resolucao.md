Parte 1 - Baixando repositórios com o git clone
O exercício propõe que você crie uma pasta fora do seu arquivo de exercícios e navegue até ela para que você execute um git clone.
Solução:
Primeiro checamos se estamos no seu diretório de exercícios. Usamos esse comando que nos retorna o path do arquivo que estamos.
Copiar
pwd
Se você estiver na pasta em que se encontra seus exercícios, pode executar o seguinte comando até sair dela:
Copiar
cd ..
Como já vimos esse comando nas aulas anteriores, o cd permite que naveguemos pelos diretórios do nosso sistema. Já o ".." diz que iremos navegar para o diretório que contém a pasta atual.
Por exemplo, vamos supor que estamos no caminho "/home" e nosso repositório está em "/home/seuNome/Documentos/trybe-exercises/bloco-2", podemos executor o cd dessa forma:
Copiar
cd seuNome/Documentos/trybe-exercises/course
Você pode continuar usando o cd até chegar no local desejado, e nele você deverá:
1 - Criar o arquivo onde iremos entrar.
2 - Entrar no arquivo.
3 - Fazer o git clone dentro dele.
(para fins de simulação, vamos supor que o nome da pasta é 'trybe-exercises', mas você pode usar o nome que preferir)
Para isso usaremos os seguintes códigos para criar e adentrar a pasta, respectivamente:
Copiar
mkdir trybe-exercises
cd trybe-exercises
Após isso, faremos o git clone. Esse comando requer que usemos o URL do repositório que queremos clonar.
Podemos usar a URL fornecida da barra de pesquisa. Portanto, se a URL for "https://github.com/pedrinho/trybe", então o comando será:
Copiar
git clone https://github.com/pedrinho/trybe
Parte 2 - Do git log ao Pull Request
2.5 - Pull Request no GitHub
É pedido para nós que criemos um Pull Request (PR) lá no GitHub, significa que iremos criar uma branch e que, evidentemente, abriremos uma PR. Abaixo está o passo a passo de como fazer isso.
Solução:
Primeiro criamos nossa branch. Na página do nosso repositório temos o menu de branchs. Ao clicar nele são mostradas todas elas, além de um campo de pesquisa para buscar pelo nome. Quando não existe nenhuma branch com aquele nome, ele sugere a criação de uma, assim:

Naquela caixa de texto colocamos o nome da nossa brach
Ao visualizarmos nossa branch, teremos essa interface. Que não nos deixa fazer quase nada...

Porque será que o GitHub ainda não nos deixa criar o Pull Request? 🤔
Isso é porque nossa branch não tem nenhuma alteração. Isto é, por que criaríamos um Pull Request de algo que não é diferente do arquivo original?
Para realizar a mudança, precisamos puxar a branch criada no GitHub para o repositório local e então adicionamos alguma coisa, e ai "commitamos" nossas alterações. Tudo isso pelo nosso terminal.
Se não pareceu simples, vamos ao passo a passo (usaremos o nome da branch das imagens para exemplificar melhor):
Primeiro puxamos a branch do GitHub para nosso repositório local por meio do git pull:
Copiar
git pull origin exercises/2.3
Agora adicionaremos um arquivo qualquer, vamos usar o touch para isso:
Copiar
touch arquivoSimplesParaOCommit.txt
E então commitamos nossas mudanças. Vamos usar aquele padrão de comandos:
Copiar
git add .
git commit -m "adicionando um arquivo de texto"
git push -u origin exercises/2.3
(Como é nosso primeiro commit nessa branch, o uso do "-u origin [branch]" se faz necessário.)
Pronto, agora vamos recarregar nosso menu de antes. O botão de criação vai estar lá. 😉

E lá está nosso botão de criar a Pull Request, verde e vivo
Basta um clique e nossa Pull Request será implementada.
OBS: Caso você tenha fechado o menu de criação de Pull Request, não esquente, pois o GitHub irá lhe alertar das mudanças feitas. Na interface inicial do seu repositório haverá uma mensagem para você criar sua Pull Request.

