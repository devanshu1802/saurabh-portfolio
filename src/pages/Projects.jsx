import React from 'react'
import gsap from 'gsap'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects =[
    {
      image1: '/photo1.png',
      image2: '/photo2.jpg',
      link1: 'https://www.artstation.com/artwork/RK2L5y',
      link2: 'https://www.artstation.com/artwork/0ld284'
    },
    {
      image1: '/photo3.jpg',
      image2: '/photo4.png',
      link1: 'https://www.artstation.com/artwork/x3PWwm',
      link2: 'https://www.artstation.com/artwork/V2P5dN'
    },
    {
      image1: '/photo5.png',
      image2: '/photo6.jpg',
      link1: 'https://www.artstation.com/artwork/wrGDlw',
      link2: 'https://www.artstation.com/artwork/oJ0xZB'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    if (window.innerWidth < 1024) return;
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger: '.lol',
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })


  return (
    <div className='lg:p-4 p-2'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font2] lg:text-[10vw] text-6xl uppercase'>Projects</h2>
      </div>

      <div className='-lg:mt-15 lol'>
        {projects.map(function(elem, idx){
          return <div key={idx} className='hero w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
              <ProjectCard 
                image1={elem.image1} 
                image2={elem.image2} 
                link1={elem.link1} 
                link2={elem.link2} 
              />
           </div>

        })}
      </div>
    </div>
  )
}

export default Projects