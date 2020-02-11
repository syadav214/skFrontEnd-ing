import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currSign: '' };
  }

  onBtnClick() {
    if (this.state.currSign === '') {
      this.setState({ currSign: this.props.currSign }, () => {
        let newSign = 'X';
        if (this.props.currSign === 'X') {
          newSign = 'O';
        }
        this.props.changeSign(newSign);
      });
    }
  }

  render() {
    return (
      <button
        onClick={this.onBtnClick.bind(this)}
        className='square'
        style={{ width: '40px', height: '40px' }}
      >
        {this.props.reset === true ? '' : this.state.currSign}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = { currSign: 'X', reset: false };
  }

  changeSign(newSign) {
    this.setState({ currSign: newSign, reset: false });
  }

  renderSquare(i) {
    return (
      <Square
        reset={this.state.reset}
        currSign={this.state.currSign}
        changeSign={this.changeSign.bind(this)}
      />
    );
  }

  reset() {
    this.setState({ currSign: 'X', reset: true });
  }

  render() {
    const status = 'Next player: ' + this.state.currSign;

    return (
      <div>
        <div className='status'>{status}</div>
        <button onClick={this.reset.bind(this)}>Reset</button>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
