import { useDispatch } from "react-redux";
import { useState, useEffect} from "react";
import authService from "./appwite/auth"
import {login,logout} from "./store/authSlice"
import { Footer, Header } from "./components";

function App() {
  //jab koi database ya external jagah kuch lana hai toh loading state bana leni chahiye ya networking se puchna
  //agar loading true toh loading icon nahi toh data dikhayenge

  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)dispatch(login({userData}))
        else dispatch(logout())
      //yaha maine try kiya data lane ka but woh nhi laa paya to logout kara denge

    })
    .finally(()=>setLoading(false));
    //yeh finally hamesha chlta hai dono hi case me
  },[])



  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div>
          <Header />
          <main>
            {/* <Outlet /> */}
          </main>
          <Footer />
        </div>

      </div>
    </>
  ):null
}

export default App
