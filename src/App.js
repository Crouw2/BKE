import React, { Component } from 'react';
import Board from './components/Board.js';
import Status from './components/Status.js';
import Move from './components/Move.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="gameComp">
				<Board />
				<Status />
				<Move />
			</div>
		);
	}
}

export default App;
