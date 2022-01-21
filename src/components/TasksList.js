import Task from "./Task";

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

export default TasksList;