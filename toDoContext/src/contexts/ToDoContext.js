import {createContext,useContext} from "react"

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false,
        }
    ],
    addTodo: ()=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    completeToggle: (id)=>{}
})

export const ToDoProvider = ToDoContext.Provider;


//yeh banane se ab mujhe kahi double baar import nahi karna pdefa useContext ko aur uske andar ke context ko
//bas useTodo se ho jayega kaam

export const useToDo = ()=>{
    return useContext(ToDoContext)
}