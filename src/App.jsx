import { useState } from "react";
import "./App.css";

function App() {
	const [todo, setTodo] = useState("");

	const [todoList, setTodoList] = useState([]);

	const addTodo = () => {
		if (todo.trim() !== "") {
			setTodoList([...todoList, todo.trim()]);
			setTodo("");
		}
	};

	const removeTodo = (index) => {
		const updatedTodoList = todoList.filter((_, i) => i !== index);
		setTodoList(updatedTodoList);
	};

	return (
		<div>
			<label htmlFor="todo">Add Task: </label>
			<input
				type="text"
				name="todo"
				id="todo"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button onClick={addTodo} style={{ marginLeft: "1rem" }}>
				Add
			</button>
			<br />
			<br />
			<ul>
				{todoList.map((todo, index) => {
					return (
						<li key={index}>
							{todo}
							<button
								onClick={() => removeTodo(index)}
								style={{
									marginLeft: "1rem",
								}}
							>
								Remove
							</button>
						</li>
					);
				})}
			</ul>
			{todoList.length === 0 && <h1>No tasks yet. Add some...</h1>}
		</div>
	);
}

export default App;
