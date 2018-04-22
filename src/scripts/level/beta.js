const BaseLevel = require('./base');

class BetaLevel extends BaseLevel {

  constructor(game, name) {
    super(game, name);

    this.maze = `
      3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
      3 1 0 3 3 3 0 0 3 3 3 0 0 0 0 0 3 0 0 3
      3 0 0 3 3 0 0 0 0 3 3 0 0 3 3 3 3 0 0 3
      3 3 0 0 3 3 3 0 0 3 3 0 0 3 3 3 0 0 0 3
      3 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3
      3 3 0 0 0 0 0 3 0 0 3 3 3 3 3 3 3 3 0 3
      3 0 0 3 3 3 3 3 0 0 0 3 3 0 0 3 0 0 0 3
      3 0 0 0 0 3 3 3 0 0 0 3 0 0 3 3 3 3 3 3
      3 3 0 0 0 3 3 3 3 0 0 3 3 0 3 3 0 0 0 3
      3 3 0 0 0 3 0 0 0 0 0 0 0 0 3 3 0 0 3 3
      3 0 0 3 3 3 0 0 3 3 0 3 0 0 3 3 0 3 3 3
      3 0 0 3 0 0 0 0 3 3 0 3 0 3 3 3 0 0 0 3
      3 0 0 3 0 0 3 3 3 3 3 3 0 3 0 0 0 0 0 3
      3 3 0 0 0 0 3 3 3 3 0 0 0 0 0 3 3 0 0 3
      3 0 0 3 0 0 3 0 0 3 0 0 0 0 0 3 3 3 0 3
      3 0 3 3 3 3 3 0 0 3 3 3 0 0 3 3 0 0 0 3
      3 0 3 3 0 0 0 0 0 3 3 3 0 0 3 3 0 0 0 3
      3 0 0 0 0 3 0 0 0 0 0 3 0 0 3 3 3 0 0 3
      3 0 0 0 3 3 3 3 3 0 0 0 0 0 3 3 0 0 2 3
      3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
    `;
  }

  update() {
    super.update();
  }

}

module.exports = BetaLevel;
