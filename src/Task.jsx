

function Task({task, count}) {
  return (
    <div className="task">
    <h1>
        Task {count}
    </h1>

    <h3>
        Title: {task.title}
    </h3>
    <div>
        <button className="btn complete " >Mark as Complete</button>
        <button className="btn delete ">Remove</button>
    </div>
    </div>
  )

}
export default Task