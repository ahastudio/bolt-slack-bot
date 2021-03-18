require('dotenv').config();

const app = require('./src/app');

const { log: print } = console;

async function main() {
  await app.start(process.env.PORT || 3333);
  print('⚡️ Bolt app is running!');
}

main();
