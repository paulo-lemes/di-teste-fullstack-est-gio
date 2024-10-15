# Teste Divulgador inteligente: Vaga Fullstack estágio

Segue abaixo as instruções para a execução do teste.

## Instruções

- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Crie um robo no Telegram usando o [BotFather](https://t.me/BotFather) e obtenha um token
- Complete o código do robo para que ao receber uma mensagem com o link do site https://divulgadorinteligente.com, ele busque o nome e preço do plano pago mais barato e retorne numa mensagem de resposta
- Ao concluir o teste, o link do repositório deverá ser enviado para o e-mail jeff@divulgadorinteligente.com com o título **Teste Vaga Fullstack estágio**

**Boa sorte! ;)**

## Alterações realizadas

- Alteração no script "dev" para carregar arquivo .env local com a variável de ambiente contendo token de ativação do bot;
- Alteração de valor e escopo da variável "url" para ser utilizada como parâmetro de keyword no método "hears" e para a chamada pelo axios;
- Utilização do Cheerio para carregamento do HTML obtido, inicialização de array para receber as informações de planos, iteração para encontrar elementos do DOM através de classes e colocação no array um objeto com nome e preço de cada plano encontrado;
- Validação de quantidade de planos obtidos e redução para plano com menor preço;
- Formatação de preço para exibição em moeda;
- Colocação de bloco try/catch para lidar com erros inesperados e retornar mensagem pelo bot;
