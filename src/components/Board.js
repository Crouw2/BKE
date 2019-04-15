import React, { Component } from 'react';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
	}

	renderSquare(i) {
		console.log(this.sate);
		return <Square value={i} />;
	}
}

export default Board;
