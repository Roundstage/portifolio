import React from 'react'
import ProjectsItems from './ProjectsItems'
var data = [
    {
        img: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: 'Excellent Sistemas',
        link: '#',
        tech: "React"
    },
    {
        img: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: 'Audio Driver',
        link: '#',
        tech: "React"
    },
    {
        img: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: "Freelancer",
        link: "#",
        tech: "React"
    },
    {
        img: "https://images.unsplash.com/photo-1625864667534-aa5208d45a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        title: "Freelancer",
        link: "#",
        tech: "React"
    },
];
function Projects() {
  return (
    <div id="Projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects</h1>
       <p className='text-center py-8'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nesciunt praesentium deserunt consequatur, mollitia ipsam iusto ea non architecto ratione aut, ipsa quae nam voluptates quasi nihil. Exercitationem, nam obcaecati!</p>
       <div className='grid sm:grid-cols-2 gap-12'>
        {data.map((item,idx)=>(
            <ProjectsItems key={idx} img={item.img} title={item.title} link={item.link} tech={item.tech}/>
            ))
        }
       </div>
    </div>
  )
}

export default Projects