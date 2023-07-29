const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

app.get('/pergunta', async (req, res) => {
  try {
    const { title } = req.query;
    const searchParam = `?tag=&title=${title}`;

    if (!title) {
      return res.status(400).json({ error: 'Parâmetro "title" é obrigatório.' });
    }

    const apiUrl = `https://suporte.fb704.com.br/solucoes/search${searchParam}`;

    // Faz a solicitação GET ao serviço com a tag "&" na URL
    const response = await axios.get(apiUrl);

    // Extrai os campos "helper", "description" e "resolution" do primeiro objeto do array
    const helperHTML = response.data[0].helper;
    const descriptionHTML = response.data[0].description;
    const resolutionHTML = response.data[0].resolution;

    // Extrai apenas o texto dos campos usando Cheerio
    const $helper = cheerio.load(helperHTML);
    const helper = $helper.text();

    const $description = cheerio.load(descriptionHTML);
    const description = $description.text();

    const $resolution = cheerio.load(resolutionHTML);
    const resolution = $resolution.text();

    // Retorna os campos com os nomes alterados e o texto extraído como resposta em um novo JSON
    res.json({ titulo: helper, descricao: description, solucao: resolution });
  } catch (error) {
    console.error('Erro ao realizar a integração com o serviço externo:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
