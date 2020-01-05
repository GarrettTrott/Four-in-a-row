class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner}`;
    this.dropped = false;
  }

  get htmlToken() {
    return document.getElementById(this.id);
  }

  drawHTMLToken() {
    const token = document.createElement("div");
    document.querySelector("#game-board-underlay").appendChild(token);
    div.setAttribute("id", this.id);
    div.setAttribute("class", "token");
    div.setAttribute("style", `background-color: ${this.owner.color}`);
  }
}
