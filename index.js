// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter.js');

const Heracles = new Fighter('🧔 Heracles', 20, 6);
const NemeanLion = new Fighter('🦁 Nemean Lion', 11, 13);

let round = 0;

while (Heracles.life > 0 && NemeanLion.life > 0) {
  console.log(`🕥 Round #${round++}`);

  if (Heracles.life > 0) {
    Heracles.fight(NemeanLion);
  }

  if (NemeanLion.life > 0) {
    NemeanLion.fight(Heracles);
  }

  Heracles.isAlive(NemeanLion);
  NemeanLion.isAlive(Heracles);
}
