import React,{useState,useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwite/config"
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [posts,setPosts]=useState(null);
    const {slug}=useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post);
                }
            })
        }
        else{
            navigate("/")
        }
        
    },[slug,navigate])
  return post?(
    <div className='py-8'>
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
  ):null
}

export default EditPost