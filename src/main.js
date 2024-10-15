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

  const $ = cheerio.load(response.data);
  const plans = [];

  $(".generic_head_price").each((index, element) => {
    const name = $(element).find(".head").text().trim();
    const price = parseFloat($(element).find(".currency").text().trim());
    if (price > 0) {
      plans.push({ name, price });
    }
  });

  console.log("Plans: ", plans);

  if (!plans.length) {
    await ctx.reply("Nenhum plano encontrado.");
    return;
  }

  const lowestPaidPlan = plans.reduce((lowest, current) =>
    current.price < lowest.price ? current : lowest
  );

  const lowestPlanName = lowestPaidPlan.name;
  const lowestPlanPrice = lowestPaidPlan.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  await ctx.reply(
    `O plano pago mais barato é o "${lowestPlanName}" e custa "${lowestPlanPrice}"`
  );
}

main();
