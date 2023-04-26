import React, { useEffect, useState } from 'react'

import CardStagiaire from '../components/cards/CardStagiaire'
import Layout from '../components/layouts/Layout'

export default function Stagiaire() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = "https://jsonplaceholder.typicode.com/users?_limit=21";

    //1-  utilise hook useeffect pour fetch data de l'API
    //2-  fetch  me renvoie une promesse
    //3- Ensuite je transform la reponse en json
    //4- Ensuite je récupère le résultat en json et je stoke dans mon state

    useEffect(()=>{
        fetch(API_URL)
        .then((res) => res.json())
        .then(result =>{
            setIsLoading(true);
            setUsers(result);
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
        <h1 className='text-3xl text-red-500 font-bold text-center mt-4'>Stagiaire</h1> 
        <div className='w-[80%] ml-auto mr-auto'>
            <table className='border-[2px] border-gray-200 bg-gray-800 text-white my-8'>
                <thead className='space-x-6'>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Nom</th>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Username</th>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Email</th>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Phone</th>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Adresse</th>
                    <th  className='w-[200px] text-[1.5rem] px-2 text-center text-red-500'>Company</th>
                </thead>
                <tbody>
                {users.map((item) => (
                        <CardStagiaire
                        key={item.id}
                        id={item.id}
                            name={item.name} 
                            username={item.username}
                            email={item.email}
                            phone={item.phone}
                            city={item.address.city}
                            street={item.address.street}
                            suite={item.address.suite}
                            zipcode={item.address.zipcode}
                            company={item.company.name}
                            
                            
                            />
                        ))} 

                </tbody>
            </table>
        </div>
    </div>
    </Layout>
    )
}
