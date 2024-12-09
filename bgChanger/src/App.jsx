import { useState } from "react";
function App() {
  const [color,setColor]=useState("olive");

  return (
    <div className="h-screen w-full flex justify-center" style={{"backgroundColor":color}}>
      <div className="fixed flex flex-wrap justify-center gap-4 bottom-10 px-2 py-3 rounded-3xl "
      style={{"backgroundColor":"lightgray"}}>
        <button className="rounded px-2 py-2 bg-red-700" onClick={()=>{setColor("red")}}>Red</button>
        <button className="rounded px-2 py-2 " style={{"backgroundColor":"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
        <button className="rounded px-2 py-2 " style={{"backgroundColor":"green"}} onClick={()=>{setColor("green")}}>Green</button>
        <button className="rounded px-2 py-2 " style={{"backgroundColor":"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
        <button className="rounded px-2 py-2 " style={{"backgroundColor":"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className="rounded px-2 py-2 " style={{"backgroundColor":"purple"}} onClick={()=>{setColor("purple")}}>Purpule</button>
      </div>
    </div>
  )
}

export default App
