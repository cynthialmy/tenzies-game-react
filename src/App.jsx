import "./App.css";
import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
	const [dice, setDice] = React.useState(allNewDice());
	const [tenzies, setTenzies] = React.useState(false);

	function allNewDice() {
		return Array.from({ length: 10 }, () => {
			return {
				value: Math.floor(Math.random() * 6) + 1,
				isHeld: false,
				id: nanoid(),
			};
		});
	}

	function handleRoll() {
		setDice((oldDice) => {
			return oldDice.map((d) => {
				if (d.isHeld) return d;
				return { ...d, value: Math.floor(Math.random() * 6) + 1 };
			});
		});
	}

	function holdDice(id) {
		setDice((oldDice) => {
			return oldDice.map((d) => {
				return d.id === id ? { ...d, isHeld: !d.isHeld } : d;
			});
		});
	}

	React.useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allHeld && allSameValue) {
			setTenzies(true);
			console.log("You won!");
		}
	}, [dice]);

	const diceElements = dice.map((d) => (
		<Die
			key={d.id}
			id={d.id}
			value={d.value}
			isHeld={d.isHeld}
			holdDice={() => holdDice(d.id)}
		/>
	));

	return (
		<main>
			{tenzies && <Confetti />}
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</p>
			<div className="dice-container">{diceElements}</div>
			<button className="button-roll" onClick={handleRoll}>
				{tenzies ? "Play Again!" : "Roll!"}
			</button>
		</main>
	);
}

export default App;
