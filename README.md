# project-faq

# requisitos:

feito em node.js

necessario possuir as libs:

axios (npm install axios)
express (npm install express)
cheerios (npm install cheerios)

# Descrição

Foi utilizado como base o endpoint:
https://suporte.fb704.com.br/solucoes/

utilizando o parametro de pesquisa: search?tag=&title=sua_pesquisa

onde tag é sempre "&"

Está puxando campos especificos do json gerado pela pesquisa e filtrando somente os campos de titulo, descrição e solução. limpando tags e classes do html gerado pelo json.

# Executando

Para realizar os testes, é necessario rodar "node server.js"

e utilizar a url: http://localhost:3000/pergunta?title=inserir_a_pesquisa

pode ser utilizado no navegador ou no postman (esse ultimo é recomendado)