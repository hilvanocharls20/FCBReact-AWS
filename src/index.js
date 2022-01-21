import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props) {

	return (
		<li className="tasks-item"> {props.taskName} </li>
		);
}

function TasksList() {

	const taskItemList = ["Follow Education.ph on Facebook", 
	"Follow AWS Siklab Pilipinas on Facebook",
	"Follow Zuitt Coding Bootcamp on Facebook",
	];

	return (
	<div>
		<input className="task-input" />				
		<ul>
			{taskItemList.map((task, index) => {
				return <Task key={index} taskName={task} />
			})}
		</ul>
	</div>
		);
}

function App() {

	const paraStyle = {
		"marginBottom": "15px"
	};


	return (

		<div className="app">

			<header className="app-header">
				<h1> My Amazing ToDo-List Apps</h1>
				<p style={paraStyle}> The most simple and amazing todo-list React App. </p>

				<TasksList />

			</header>
		</div>
			);
}

ReactDOM.render(<App />, document.getElementById("root"));