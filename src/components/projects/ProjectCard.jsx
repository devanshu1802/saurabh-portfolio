import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <a href={props.link1 || "https://www.artstation.com/saurabh583"} target="_blank" rel="noreferrer" className='w-full h-1/2 lg:w-1/2 lg:h-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden block'>
                <img className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' src={props.image1} alt="Project preview" />
                <div className='opacity-100 lg:opacity-0 transition-all duration-500 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/20 lg:bg-black/40'>
                    <h2 className='uppercase lg:text-6xl md:text-5xl text-2xl font-[font1] border-2 md:border-4 px-4 py-1 lg:px-5 lg:pt-3 lg:pb-2 text-white rounded-full bg-black/40 lg:bg-transparent'>View Project</h2>
                </div>
            </a>
            <a href={props.link2 || "https://www.artstation.com/saurabh583"} target="_blank" rel="noreferrer" className='w-full h-1/2 lg:w-1/2 lg:h-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden block'>
                <img className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' src={props.image2} alt="Project preview" />
                <div className='opacity-100 lg:opacity-0 transition-all duration-500 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/20 lg:bg-black/40'>
                    <h2 className='uppercase lg:text-6xl md:text-5xl text-2xl font-[font1] border-2 md:border-4 px-4 py-1 lg:px-5 lg:pt-3 lg:pb-2 text-white rounded-full bg-black/40 lg:bg-transparent'>View Project</h2>
                </div>
            </a>
        </>
    )
}

export default ProjectCard