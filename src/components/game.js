import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {resetGame, makeGuess, auralUpdate} from '../actions';

export class Game extends React.Component {

  restartGame() {
    this.props.dispatch(resetGame)
  }

  generateAuralUpdate() {
    this.props.dispatch(auralUpdate(this.props.guesses, this.props.feedback))
  }

  makeGuess() {
    this.props.dispatch(makeGuess(this.props.guess))
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = this.props.guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.auralStatus
});

export default connect(mapStateToProps)(Game);