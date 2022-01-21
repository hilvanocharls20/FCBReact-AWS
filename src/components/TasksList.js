import {useState} from "react";
import Task from "./Task";

function TasksList() {
	const taskItemList = ["Follow Education.ph on Facebook", 
	"Follow AWS Siklab Pilipinas on Facebook",
	"Follow Zuitt Coding Bootcamp on Facebook",
	];

	const [taskValue, setTaskValue] = useState("Just another task")
	console.log("taskvalue:", taskValue);

	const inputChangeHandler=(e) =>{setTaskValue(e.target.value)}


	return (
	<div>
		<input className="task-input" placeholder="Create a new task" onChange={inputChangeHandler} />				
		<ul>
			{taskItemList.map((task, index) => {
				return <Task key={index} taskName={task} />
			})}
		</ul>
	</div>
		);
}

export default TasksList;