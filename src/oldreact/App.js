import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { startGame, cancelGame } from '../actions/settings';
import View from "./View"
import ButtonBar from './ButtonBar';
//import fetchStates from "../reducers/fetchStates";

class App extends Component {
  startGame = () => { //we must init the deck - but we also query the API separately later.
    this.props.startGame();
    this.props.fetchNewDeck();
  }
  render() {

    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p> Please try reloading the app. An error occured. </p>
          <p> {this.props.message} </p>
        </div>
      )
    }

    return (
      <div>
      <h2>&diams; &clubs; Evens or Odds &hearts; &spades;</h2>
      {
        this.props.gameStarted ? (
          <div>
            <h3> The game is on! </h3>
            <GameState />
            <br />
            <Guess />
            <br />
            <DrawCard />
            <hr />
            <Card />
            <hr />
            <button onClick={this.props.cancelGame}> Cancel Game </button>
          </div>
        ): (
          <div>
            <h3> A new game awaits </h3>
            <br />
            <button onClick={this.startGame}> Start Game </button>
            <hr />
            <Instructions />
          </div>
        )
      }
      </div>
    );

  }
}

const mapStateToProps = state => {

  const { gameStarted } = state.settings;
  const { fetchState, message } = state.deck;

  return {gameStarted, fetchState, message};
}

//Inline object is MappingDispatchtoProps.
const componentConnector = connect(mapStateToProps, {
startGame,
cancelGame,
fetchNewDeck
});

export default componentConnector(App);