import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook} from "react-icons/fa"

function Background() {
  return (
    <div id="Home">
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="Alpine Mountain Photo" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Allison Martins</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    <TypeAnimation
                    sequence={[
                        'I\'m a Fullstack Developer', // Types 'One'
                        1000, // Waits 1s
                        'I\'m a Tech Enthusiast', // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        'I\'m a back-end specialist', // Types 'Three' without deleting 'Two'
                        1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}/>
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaGithub className="cursor-pointer" size={20}/>
                    <FaLinkedin className="cursor-pointer" size={20}/>
                    <FaTwitter className="cursor-pointer" size={20}/>
                    <FaFacebook className="cursor-pointer" size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Background