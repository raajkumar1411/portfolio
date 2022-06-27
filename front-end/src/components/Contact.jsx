import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full py-10 '>
            <div className='mx-5'>
            <div className='pb-8'><p className=' font-bold text-4xl  inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-3'>check out some of my work right here</p></div>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/17814e96-e0a7-4073-bfd4-1a68dd6d17d1' method='POST' className='flex flex-col w-full mx-5 md:w-1/3'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name='email' placeholder='Enter your mail Id' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea rows='10' name='textarea' placeholder='Enter you name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
<button className='px-6 py-3 my-8 mx-auto flex items-center text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>let,s talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact