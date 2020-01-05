class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  get activePlayer() {
    const activePlayer = this.players.find(player => (player.active = true));
    return activePlayer;
  }

  createPlayers() {
    const players = [
      new Player("Jerome", 1, "#e15258", true),
      new Player("Sally", 2, "#e59a13")
    ];
    return players;
  }

  startGame() {}
}
