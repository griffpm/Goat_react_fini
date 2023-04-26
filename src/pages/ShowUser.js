import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

export default function ShowUser() {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

    useEffect(()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then(result =>{
            setIsLoading(true);
            setUser(result);
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
        <div>
        <h1 className='text-3xl text-red-500 uppercase- text-bold text-center my-4'>{user.name}</h1>
        </div>
        <div>
            <img src="/img/luffy.jpeg" alt="" />
        </div>
        <div>
            <p className='text-xl text-center my-2'>{user.username}</p>
            <p className='text-xl text-center my-2'>{user.email}</p>
            <p className='text-xl text-center my-2'>{user.phone}</p>
            <p className='text-xl text-center my-2'>{user.address.suite}{user.address.street}{user.address.suite}{user.address.city}{user.address.zipcode}</p>
        </div>
        
    </div>
    
</div>
</div>
    </Layout>
    
  )
}
