import React from 'react'
import service from "../appwite/config";
//hamare paas yeh state me available nahi hai
import { Link } from 'react-router-dom';
//yeh $id hame appwrite ka syntax hai
function PostCard({$id,title,featuredImage}) {
  return (
    // link me hame pura address dene ki jarurat nahi hai jaha ho waha se aage jana rhta hai
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl'
                // image ki id hi ham database me store kara rahe har post ke liye
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard