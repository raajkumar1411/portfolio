import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/raajkumar-rajasekaran-29aaa01b8/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/raajkumar1411'
        
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:raajkumar1999@gmail.com',
        
        },
        {
            id:4,
            child:(
                <>
                Resume<BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/front-end/public/resume.pdf',
            style:'rounded-br-md',
            download:true
        },
        
    ]
  return (
    <div  className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {links.map(({id,child,href,style,download})=>{
return(

    <li  key={id} className={"flex justify-between items-center w-36 h-14 px-3 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 bg-gray-800 hover:bg-gray-500" + " " +style}>
                <a className='flex justify-between items-center w-full text-white' download={download} rel="noreferrer" target='_blank' href={href} >
                    {child}
                    </a>

                    </li>
            )
            })}
            </ul>
    </div>
  )
}

export default SocialLinks