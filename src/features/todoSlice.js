import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,text:"hello world"}]
}

function sayHello() {
    console.log("Hello world")
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo) => todo.id !==action.payload)
        },
        updateTodo:(state,action)=>{
            console.log("start",action.payload)
            state.todos=state.todos.map((todo,i)=>{
                if(i+1!=action.payload.id){
                    return todo

                }

                else{
                    
                       return {id:action.payload.id, text:action.payload.text}
                    
                }
            })
            console.log("wokred",state.todos)
        }
    }

})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer