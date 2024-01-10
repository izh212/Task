import Task from "./Task"


function TaskList() {
  return (
    <>
    <div className="tasks">
    <h1 className="task-head">Tasks</h1>
    <Task task={{title:'Task1'}} count={"1"}/>
    <Task task={{title:'Task2'}} count={"3"}/>

    <Task task={{title:'Task3'}} count={"2"}/>

    </div>
    </>
  )
}

export default TaskList