import imgOne from '/images/one1.jpg'
import imgTwo from '/images/two1.jpg'
import imgThree from '/images/three1.jpg'
import imgFour from '/images/four1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Cards(){

    useEffect(()=>{
        AOS.init({
            duration: 800, // Duration of animation (in milliseconds)
            easing: 'ease-in-out', // Easing function
            offset: 100, // Offset (in pixels) from the original trigger point
            once: false // Whether animation should only happen once
        });
    },[])

const arr = [imgOne,imgTwo,imgThree,imgFour]

    return(
        <section className="cardsMain p-5">
          <div className="container  md:px-10 flex justify-center">
          <div className="flex flex-warp"> 
            {arr.map((e,i) =>(
       <div data-aos="fade-up" key={i} className='mx-3'><div className="cardWarp" style={{backgroundImage:`url(${e})`}}></div>
  <div className="flex justify-between"><p>Product name</p> <p></p></div>
  </div>
            ))}
           </div> 
          </div>
        </section>
    )
}