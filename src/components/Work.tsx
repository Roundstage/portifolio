import React from 'react'
import WorkItem from './WorkItem';
var data = [
    {
        year: 2022,
        title: 'Excellent Sistemas',
        duration: '7 Months',
        details: "Was a full stack developer for a Ecommerce, where we have built a ERP/WMS system from scratch, using APIs to handle the data. (Like TinyERP, Meli, Anymarketing and Kiskadi)"
    },
    {
        year: 2021,
        title: 'Audio Driver',
        duration: '1 Year 7 Months',
        details: "Was a full stack developer for a Ecommerce, where we have built a ERP/WMS system from scratch, using APIs to handle the data. (Like TinyERP, Meli, Anymarketing and Kiskadi)"
    },
    {
        year: 2019,
        title: "Freelancer",
        duration: "1 Year",
        details: " Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla "
    },
    {
        year: 2017,
        title: "Freelancer",
        duration: "1 Year",
        details: " Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla "
    },
];
function Work() {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Work</h1>
        {data.map((item,idx)=>(
            <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}
    </div>
  )
}

export default Work