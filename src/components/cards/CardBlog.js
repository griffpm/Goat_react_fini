import React from 'react'
import { Link } from 'react-router-dom'

export default function CardBlog({title, body, id}) {
    return (
    <div>
    <Link to={`/post/${id}`}>
        <div className='w-[400px] h-[600px] px-4 py-4 my-4 border-[2px] shadow-black shadow-lg '>
        
            <div className='ml-auto mr-auto h-[50%] '>
                <h3 className='uppercase text-[1.5rem] text-red-400 flex justify-center py-2'>{title}</h3>
                <p className='text-[1rem] flex justify-center text-center py-2'>{body}</p>  
            </div>
            <img src="img/skypiea.avif" alt="" className='shadow-black shadow-md' />
        </div>
    </Link>
    </div> 
    )
}
