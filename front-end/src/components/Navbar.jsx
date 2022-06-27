import React, { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav,setNav]=useState(false);

    const links=[{
        id:1,
        link:'home',
    },{
        id:2,
        link:'about',
    },{
        id:3,
        link:'portfolio',
    },{
        id:4,
        link:'experience',
    },{
        id:5,
        link:'contact',
    }]
  return (
   
   <div className='flex justify-between items-center w-full h20 text-white fixed bg-black px-4 '>
{/* logo */}
<div >
   <h1 className="text-3xl font-signature  m-1 ml-2">Raajkumar</h1> 
</div>
{/* navbar desktop */}
<ul className=" hidden md:flex">
    {links.map(({id,link})=>{
return(

    <li key={id} className='px-2 cursor-pointer capitalize text-sm text-gray-500 hover:scale-105  duration-200 hover:text-white'>
        <Link to={link} smooth duration={500}>{link}</Link>
    </li>
)
    })}

</ul>
{/* navbar mobile */}
<div onClick={()=>{setNav(!nav)}} className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-white hover:scale-105 duration-200 md:hidden'>
    {nav?<FaTimes size={30}/>:<FaBars  size={30}/>}
        </div>
        {/* menus */}
        {nav && (

        
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

{links.map(({id,link})=>{
    return(
        
        <li key={id} className='px-4 cursor-pointer capitalize py-5 text-2xl
        hover:scale-105  duration-200 hover:text-white'><Link onClick={()=>{setNav(!nav)}} to={link} smooth duration={500}>{link}</Link></li>
        )
    })}
        </ul>
    )}

        </div>
  );
}

export default Navbar;