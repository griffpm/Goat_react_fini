import React from 'react'
import { Link } from 'react-router-dom'

export default function CardStagiaire({id ,name, email, username, phone, city, suite, street, zipcode, company}) {
  return (
    
    <tr  className='space-x-6'>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'><Link to={`/user/${id}`}>{name}</Link></td>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'>{username}</td>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'>{email}</td>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'>{phone}</td>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'>{suite} {street} {city} {zipcode}</td>
        <td className='w-[200px] text-[1rem] px-2 text-center py-4'>{company}{name}</td>

    </tr>
    
  )
}