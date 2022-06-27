import React from 'react';import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpeg';
import a4 from '../assets/a4.jpeg';
import a5 from '../assets/a5.jpeg';
import a6 from '../assets/a6.jpeg';

const Experience = () => {
    const links=[{
        id:1,
        src:a1,
        link:'https://reactjs.org/',
        title:'html'
        },{
            id:2,
            src:a2,
            link:'https://reactjs.org/',
            title:'html'
            },{
                id:3,
                src:a3,
                link:'https://reactjs.org/',
                title:'html'
                },{
                    id:4,
                    src:a4,
                    link:'https://reactjs.org/',
                    title:'html'
                    },{
                        id:5,
                        src:a5,
                        link:'https://reactjs.org/',
                        title:'html'
                        },{
                            id:6,
                            src:a6,
                            link:'https://reactjs.org/',
                            title:'html'
                            },
    ]
  return (
    <div name='experience' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white py-10 '>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>

        <div className='p-4'>
            <div><p className=' font-bold text-4xl  inline border-b-4 border-gray-500'>Experience</p>
            <p className='py-3'>check out some of my work right here</p></div>
        </div>
         </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 '>
{links.map(({id,src,link,title})=>{
    return(
<li key={id} className='list-none '>
<div className='flex flex-col items-center' >
<a href={link} target="blank"> 
        <img className=' rounded-lg w-full h-48 hover:scale-105 duration-300  shadow-md shadow-red-500  'src={src} alt="" />
</a>
<p className='py-3'>{title}</p>
</div>

</li>
        )
    })}
    </div>
    </div>
  )
}

export default Experience