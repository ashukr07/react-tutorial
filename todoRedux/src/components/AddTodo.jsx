import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from "../features/todo/todoSlice"
function AddTodo() {
    const [input,setInput]=useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        //dispatch ka use karo to send this data
        //useDispatch aur selector react redux me aata hai
        //dispatch use reducers to make changes in the store
        //dispatch ke andar batana hoga ki kaunsa method use karna chahte hai
        //isliye hamne feature me se individual chijo ko export kara tha 

        dispatch(addTodo(input));
        //yaha ham dispatch ke andar reducers ko call karte hai par jaise waha woh expect kar rha hai ki ham action.payload bhejenge par abhi ham directly bhi bhej skte hai  
        setInput('');
    }


    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
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
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo