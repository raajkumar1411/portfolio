import React from 'react';
import pic from '../assets/pic.jpg';
import {Link} from 'react-scroll';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import portfolio from './Portfolio';

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full  text-white px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full  mt-4 mx-5  ' >
                <h2 className='text-4xl sm:text-7xl font-bold '> I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-6'>Currently, I love to work on web application using techologies like  HTML,CSS,JS,React,Tailwind,Node Js,Express Js and MongoDb.

                </p>
                <div  >
<Link to='portfolio' smooth duration={700} className='text-whtie w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> portfolio 
<span className='hover:rotate-90 duration-500'>
    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
    </span> 
    </Link>
                </div>
            </div>
            <div >
        <img src={pic} alt="raajkumar" className='rounded-2xl w-auto h-56 overflow-hidden md:w-full    ' />

            </div>
        </div>
    </div>

  )
}

export default Home