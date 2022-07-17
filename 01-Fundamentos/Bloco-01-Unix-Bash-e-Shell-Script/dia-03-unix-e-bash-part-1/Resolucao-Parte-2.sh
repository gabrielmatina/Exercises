# Exercicio 1

# Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"


# Exercicio 2

# Mostre todo o conteúdo do arquivo countries.txt na tela.
cat countries.txt


# Exercicio 3

# Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
cat countries.txt


# Exercicio 4

# Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
grep -r "Zambia" countries.txt


# Exercicio 5

# Busque por Brazil no countries.txt.
grep -r "Brazil" countries.txt
