import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams();
  return (
    <div className="text-center bg-slate-500 p-4 m-2 text-3xl text-white">User : {userid}</div>
  )
}

export default User