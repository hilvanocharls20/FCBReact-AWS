import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function App() {

	const paraStyle = {
		"marginBottom": "15px"
	};


	return (

		<div className="app">

			<header className="app-header">
				<h1> My Amazing ToDo-List Apps</h1>
				<p style={paraStyle}> The most simple and amazing todo-list React App. </p>

				<ul>
					<li className="tasks-item"> Follow Education.ph on Facebook. </li>
					<li className="tasks-item"> Follow AWS Siklab Pilipinas on Facebook. </li>
					<li className="tasks-item"> Follow Zuitt Coding Bootcamp on Facebook. </li>
				</ul>

			</header>
		</div>
			);
}

ReactDOM.render(<App />, document.getElementById("root"));