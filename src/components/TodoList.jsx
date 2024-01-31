import Task from "./Task"

const TodoList = () => {
  return (
    <div>
        <p>Lista de tarefas:</p>
        <div>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    </div>
  )
}

export default TodoList