import React from 'react';
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpeg';
import a5 from '../assets/a5.jpeg';
import a6 from '../assets/a6.jpeg';

const portfolio = () => {
    const links=[{
    id:1,
    src:a1
    },{
        id:2,
        src:a2
        },{
            id:3,
            src:a3
            },{
                id:4,
                src:a4
                },{
                    id:5,
                    src:a5
                    },{
                        id:6,
                        src:a6
                        },
]
  return (
    <div name='portfolio' className=' h-full w-full bg-gradient-to-b from-black to-gray-800 text-white py-10' >
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>

        <div className='p-4'>
            <div><p className=' font-bold text-4xl  inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-3'>check out some of my work right here</p></div>
        </div>
         </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 '>
{links.map(({id,src})=>{
    return(
<li key={id} className='list-none '>
<div  className='flex flex-col  items-center' >

        <img className=' rounded-lg w-2/3 h-48 hover:scale-105 duration-300 'src={src} alt="" />
        <div className='flex justify-around bg-gray-700 rounded m-2 '><button className='px-6 w-full border-r-2 border-gray-800 hover:scale-105 duration-300 ' >Demo </button>
  <button className='px-6 w-full  hover:scale-105 duration-300 '>code</button></div>
</div>
</li>
        )
    })}
    </div>
          
    </div>
  )
}

export default portfolio