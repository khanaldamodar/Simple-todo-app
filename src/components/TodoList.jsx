const TodoList = ({text,id, isCompleted, DeleteTodo, handleCompleted}) => {
   
  return (
    <div className="mt-2" >
        <div className="p-1 rounded-md flex items-center justify-between">
            <span></span>
            <span className="text-gray-600 text-sm p-2 font-serif font-semibold text-center">{text}</span>
            <button onClick={()=> DeleteTodo(id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
        </div>
    </div>
  )
}

export default TodoList