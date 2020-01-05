class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * Returns active player.
   * @return  {Object}    player - The active player.
   */
  get activePlayer() {
    const activePlayer = this.players.find(player => player.active);
    return activePlayer;
  }

  /**
   * Creates two player objects
   * @return  {array}    An array of two player objects.
   */

  createPlayers() {
    const players = [
      new Player("Jerome", 1, "#e15258", true),
      new Player("Sally", 2, "#e59a13")
    ];
    return players;
  }

  /**
   * Initializes game.
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */

  handelKeydown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        this.token;
      } else if (e.key === "ArrowRight") {
      } else if (e.key === "ArrowDown") {
      }
    }
  }
}
