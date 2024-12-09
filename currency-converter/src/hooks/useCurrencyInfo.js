import {useState,useEffect} from "react"

function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res)=> res.json())
    .then((res)=>setData(res[currency]))
    },[currency])
    return data
    // ham yaha sirf data hi return krenge as data se hi kam hai but pura function export kar rahe 
    // as we are not setting any data there we need the fetched data
    
}

export default useCurrencyInfo