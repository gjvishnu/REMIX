import womanImg from '/images/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Banner(){

useEffect(()=>{
    AOS.init({
        duration: 800, // Duration of animation (in milliseconds)
        easing: 'ease-in-out', // Easing function
        offset: 100, // Offset (in pixels) from the original trigger point
        once: true // Whether animation should only happen once
    });
},[])

    return(
        <>
        <section className="bannerMain mb-5  border">
            <div className=" grid grid-cols-2 ">
                <div className='flex justify-center'>
                    <img data-aos="zoom-in" className='banWoImg' src={womanImg}/>
                </div>
                <div className='pt-10 pr-4'>
                    <h1  data-aos="fade-left" className='bangers-regular md:text-3xl'><span className='text-red-800'>New Trends</span> Hello New Season</h1>
                    <h2 className='pacifico-regular mt-3' data-aos="fade-right">Fashion is the armor to survive the reality of everyday life. It's an expression of individuality, a way of saying who you are without having to speak</h2>
                </div>
            </div>
         </section>
      </>
      
    )
}