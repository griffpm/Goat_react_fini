import React, { useEffect, useState } from 'react'

import CardBlog from '../components/cards/CardBlog'
import Layout from '../components/layouts/Layout'

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=9";

    //1-  utilise hook useeffect pour fetch data de l'API
    //2-  fetch  me renvoie une promesse
    //3- Ensuite je transform la reponse en json
    //4- Ensuite je récupère le résultat en json et je stoke dans mon state

    useEffect(()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then(result =>{
            setIsLoading(true);
            setPosts(result);
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
    <div>
        <h1 className='text-3xl text-red-500 font-bold text-center'>Blog</h1>
        <div>
        <div className='mt-2 pt-16 w-[90%] ml-auto mr-auto flex flex-wrap justify-around '>
                        {posts.map((item) => (
                        <CardBlog
                            key={item.id}
                            title={item.title} 
                            body={item.body}
                            id={item.id}
                            
                            />
                        ))} 
            </div>
        </div>
    </div>
    </Layout>
    )
}
