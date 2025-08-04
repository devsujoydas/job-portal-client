import React from 'react'
import { Link } from 'react-router-dom';

const CountryCard = ({ name, code }) => {

    console.log(code);
    return (
        <div className='border border-zinc-200 p-2 rounded-md shadow-md group flex flex-col justify-between'>
            <Link to={""} className='overflow-hidden h-40 w-full  rounded-md'>
                <img className='object-cover h-full w-full cursor-pointer group-hover:scale-200 transition-all duration-' src={`https://flagcdn.com/${code}.svg`} alt="" />
            </Link>
            <div className='pt-2'>
                <h1 className='font-poppins text-lg'>{name}</h1>
            </div>
        </div>
    )
}

export default CountryCard