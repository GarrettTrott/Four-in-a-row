class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner}`;
    this.dropped = false;
  }
}
