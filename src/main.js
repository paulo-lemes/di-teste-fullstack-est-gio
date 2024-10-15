const axios = require("axios");
const cheerio = require("cheerio");
const { Telegraf } = require("telegraf");

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);
const url = /divulgadorinteligente.com/i;

async function main() {
  bot.start(async (ctx) => {
    return ctx.reply("Olá :)");
  });

  bot.hears(url, getLowestPrice);

  bot.launch();
  console.log("bot is listening...");
}

async function getLowestPrice(ctx) {
  // const { message } = ctx.update;

  await ctx.reply("Buscando dados...");
  const response = await axios.get(`https://${url.source}`);

  // Use o Cheerio para converter html em DOM

  // Em seguida altere as linhas abaixo para retornar o nome e preço do plano pago mais barato
  const lowestPlanPrice = "";
  const lowestPlanName = "";

  await ctx.reply(
    `O plano pago mais barato é o "${lowestPlanName}" e custa "${lowestPlanPrice}"`
  );
}

main();
