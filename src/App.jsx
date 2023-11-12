import "./App.css";
import Die from "./Die";
import React from "react";

function App() {
	const [dice, setDice] = React.useState(allNewDice());

	function allNewDice() {
		return Array.from(
			{ length: 10 },
			() => Math.floor(Math.random() * 6) + 1
		);
	}

	function handleRoll() {
		setDice((oldDice) =>
			oldDice.map((d) =>
				d.isFrozen ? d : Math.floor(Math.random() * 6) + 1
			)
		);
	}

	const diceElements = dice.map((d) => <Die value={d} />);

	return (
		<main>
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</p>
			<div className="dice-container">{diceElements}</div>
			<button className="button-roll" onClick={handleRoll}>
				Roll!
			</button>
		</main>
	);
}

export default App;
