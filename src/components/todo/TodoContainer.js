import TodoContextProvider from '@/context/TodoContext';
import TodoInput from '@/components/todo/TodoInput';
import TodoGroup from '@/components/todo/TodoGroup';


function TodoContainer({container,remove}){
	const idx = container.idx;
	const removeContainer = () => remove(idx);

	return(
		<TodoContextProvider>
			<div className="todo-container">
				<button onClick={removeContainer}>삭제</button>
				<TodoInput />
				<TodoGroup />
			</div>
		</TodoContextProvider>
	);
}

export default TodoContainer;