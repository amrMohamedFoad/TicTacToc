import React, { Component } from "react";
import "./App.css";
import Status from "./components/status";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    };
  }

  setPlayer(player) {
    //console.log(player);
    this.setState({
      player: player
    });
  }

  checkWinner() {
    const winLines = [
      ["0", "1", "2"], //first horizontal
      ["3", "4", "5"], //second horizontal
      ["6", "7", "8"], //third horizontal
      ["0", "3", "6"], //first vertical
      ["1", "4", "7"], //second vertical
      ["2", "5", "8"], //third vertical
      ["0", "4", "8"], //diagonal
      ["2", "4", "6"] //diagonal
    ];

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];

      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        alert("Player " + this.state.player + " Won");
        this.setState({
          winner: this.state.player
        });
      }
    }
  }

  handleClick(index) {
    //we hve player and not having a winner yet
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;

      //if cell is empty
      if (this.state.board[index] == null && !this.state.winner) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        });
      }
      this.checkWinner();
    }
  }

  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }

  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="mainTitle">Tic Tac Toc</h1>
        <Status
          player={this.state.player}
          setPlayer={e => this.setPlayer(e)}
          winner={this.state.winner}
        />
        <br></br>
        <div className="board">{this.renderBoxes()}</div>
        <button disabled={!this.state.winner} onClick={() => this.reset()}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
