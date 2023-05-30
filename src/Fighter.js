/* Fighter class definition */
const MAX_LIFE = 100;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

class Fighter {
  constructor(name, strength, dexterity, life = MAX_LIFE) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = life;
  }
  fight(defender) {
    const damage = getRandomInt(1, this.strength);
    const damageMitigated = Math.max(0, damage - defender.dexterity);
    defender.life = Math.max(0, defender.life - damageMitigated);

    console.log(
      `${this.name} ⚔️ ${defender.name} 💙 ${defender.name} : ${defender.life}`
    );
  }

  isAlive = (defender) => {
    if (this.life <= 0) {
      console.log(`💀 ${this.name} is dead`);
      console.log(`🏆 ${defender.name} wins (💙 ${defender.life}) `);
    }
  };
}

module.exports = Fighter;
