import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useParams } from 'react-router-dom';

export default function ShowPost() {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then(result =>{
            setIsLoading(true);
            setPost(result);
    },
        (error)=> {
            setIsLoading(true);
            setError(error.message);
        }
    );
    }, []);

    if(!isLoading){
        return(
            <Layout>
                <p className='text-green-500 text-center text-2xl'>En chargement...</p>  
            </Layout>
        );
    } else if(error){
        return(
            <Layout>
                <p className='text-red-500 text-center text-2xl'>Erreur : {error}</p>  
            </Layout>
        );
    }

    return (
        <Layout>
            <div className='w-[90%] ml-auto mr-auto my-6'>

                <div className='w-[600px] ml-auto mr-auto '>
                    <div>
                        <h1 className='text-3xl text-red-500 uppercase- text-bold text-center my-4'>{post.title}</h1>
                        <p className='text-xl text-center my-2'>{post.body}</p>
                    </div>
                    <img src="/img/alabasta.jpg" alt="" />
                </div>
            </div>
        </Layout>
        
    )
}