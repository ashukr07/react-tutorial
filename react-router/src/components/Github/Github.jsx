import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(() => {
    //  fetch("https://api.github.com/users/ashukr07")
    //  .then(res=>res.json())
    //  .then(data =>{
    //     console.log(data);
    //     setData(data);
    //  })
    // }, [])
    
  return (
    <div className=' flex flex-col  justify-center text-center m-4 bg-slate-500 text-white text-3xl p-5'>
        <p>Github followers: {data.followers} </p>
        <img  src={data.avatar_url} alt="Git picture" width={300} />
        

    </div>
  )
}

export default Github
