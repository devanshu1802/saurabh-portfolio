import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Timeline } from 'gsap/gsap-core.js'
import { useRef } from 'react'
import {useLocation} from 'react-router-dom'

const Stairs = (props) => {

  const currentPath = useLocation().pathname 
  
  const stairParentRef = useRef(null)
  const pageRef = useRef() 

  useGSAP(function(){
    if (window.innerWidth < 1024) {
      gsap.set(stairParentRef.current, { display: 'none' });
      gsap.set(pageRef.current, { opacity: 1, scale: 1 });
      return;
    }

    const tl = gsap.timeline()
    tl.to(stairParentRef.current,{
     display:'block'
    })
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%'
    })

    gsap.from(pageRef.current,{
      opacity:0,
      delay:1.3,
      scale:1.2,
      clearProps: 'transform'
    })
  },[currentPath])



    return (
        
    <div>
       <div ref={stairParentRef} className='h-screen w-full fixed z-10 top-0' >
            <div className='h-full flex w-full '>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
        <div ref={pageRef}>
          {props.children}
        </div>
    </div>

    )
}

export default Stairs