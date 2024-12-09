import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"Hello world"}]
}

export const todoSlice = createSlice({
    //name property yeh andar se hi aati hain ham uska naam badal skte hai

    name:"todo",
    initialState,
    //reducer me property aur value aayegi
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                //payload bhi hamara object hi hai usme se ham particular naam vale chije utha skte hai 
                //ab yaha text de rakha hai toh wahi utha lega
            }
            state.todos.push(todo)
            //state updation hai jaise object hoga toh differently dalenge value
            //state me todos hi hai as intialState hamne bata rakhi hai

        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!== action.payload
            )
        },
        //currently unka kya state hai uska info deta hai
        //action me ho skta hai ki hame kuch value dalni hai jaise remove krne ke liye ID chahiye rhti hai

    }
})

//ham functionality in reducers ko export karenge kyunki ham uske hi through state update karenge
export const {addTodo,removeTodo}=todoSlice.actions

//ab hame store ko bhi batana hoga ki kaise kya karna h warna store maintain nahi kar payega
//as  it is restrictive store hai ki mai jo reducers doge unse hi mai state ko update karunga

export default todoSlice.reducer