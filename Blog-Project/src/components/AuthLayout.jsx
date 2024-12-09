import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Protected = ({children,authentication =true}) => {
    const navigate = useNavigate();
    const [loader,setLoader]=useState(true);
    //yeh hamare backend se aayega ki kya status hai authentication through the state stored in store
    const authStatus = useSelector((state)=> state.auth.status)
    //useEffect batayega ki kaha bhejna hai login and home pe aur kya kya change ho  ki ham waha pe wapis se check akre
    useEffect(() => {
        if(authentication&& authStatus!=authentication){
            navigate("/login");
        }
        else if(!authentication&& authStatus !=authentication){
            navigate("/")
        }
        setLoader(false);
    }, [authStatus,navigate,authentication])
    
  return loader ? <h1>Loading ... </h1>:<>{children}</>
}

export default Protected