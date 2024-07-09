import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, updateTodo} from '../features/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const [id,setId] = useState("")
    const [edit,setEdit]=useState(false)
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(edit){
            dispatch(updateTodo({id:id, text:input}));
            
        }
        else
        {
        dispatch(addTodo(input)) //dispatch ek reducer ko use krte huye store m value change krta h
        }
        setInput('')
        setId('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input type="checkbox"
        checked={edit} 
        onClick={()=>setEdit((prev)=>!prev)}/>
        { edit ? <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter Todo number..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />:<></>}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
       {edit?"Update Todo" : "Add Todo"}
      </button>
      
    </form>
  )
}

export default AddTodo