import "./App.css";
import Die from "./Die";

function App() {
	return (
		<main>
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze it at
				its current value between rolls.
			</p>
			<div className="dice-container">
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
				<Die value="1" />
			</div>
			<button className="btn btn-danger">Roll!</button>
		</main>
	);
}

export default App;
