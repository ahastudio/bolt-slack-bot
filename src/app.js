const { App, ExpressReceiver } = require('@slack/bolt');

const { log: print } = console;

let timerId = null;
const queue = [];

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  receiver,
});

app.message(async ({ message, say }) => {
  if (message.user) {
    await say(`Hello, <@${message.user}>!`);
  }

  if (timerId) {
    return;
  }

  timerId = setInterval(async () => {
    const text = queue.shift();
    if (text) {
      await say(`[LOG] ${text}`);
    }
  }, 1000);
});

receiver.router.get('/say', async (req, res) => {
  const { message } = req.query;
  print(`GET /say - ${JSON.stringify(message)}`);

  queue.push(message);

  res.send('OK');
});

module.exports = app;
