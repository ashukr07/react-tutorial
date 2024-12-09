import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password,setPassword]=useState("");
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [length,setLength]=useState(8);

  const passwordRef=useRef(null);

  const generatePassword=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)str+="1234567890";
    if(charAllowed)str+=",?/:;{}[]\~!";
    let pass="";
    for (let i = 0; i <length; i++) {
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);  
    }
    setPassword(pass);
  })

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(generatePassword,
[length,numberAllowed,charAllowed]);



  return (
    <>
    <div className='w-full max-w-md mx-auto p-4 m-6 rounded-2xl text-orange-600  bg-gray-700'>
      <h1 className='text-white text-center mb-4'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-5">
      <input type='text'
       placeholder="Password"
       value={password}
       readOnly
       className='outline-none w-full py-1 px-3'
       ref={passwordRef}
       />
       
      <button
      onClick={copyPasswordToClipboard}
      className='outline-node bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
      </button>
      </div>

      <div className='text-sm flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          value={length}
          onChange={()=>{setNumberAllowed(prev=>!prev)}}
          />
          <label htmlFor='numberInput'>Number </label>
        </div>
      </div>

      <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charAllowed}
          id='numberChar'
          onChange={()=>{setCharAllowed(prev=>!prev)}}
          />
          <label htmlFor='numberChar'>Special Character </label>
        </div>
      </div>
      

    
    </>
  )
}

export default App
