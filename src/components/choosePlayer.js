import React, { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }

  render() {
    return (
      <form className="playerForm" onSubmit={e => this.handleForm(e)}>
        <div> Choose Player </div>
        <label>
          <input type="radio" name="player" value="X" />
          Player X
        </label>
        <br></br>
        <label>
          <input type="radio" name="player" value="O" />
          Player O
        </label>
        <br></br>
        <input type="submit" value="start" />
      </form>
    );
  }
}

export default Player;
