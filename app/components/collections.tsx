import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Collection (){


    useEffect(()=>{
        AOS.init({
            duration: 800, // Duration of animation (in milliseconds)
            easing: 'ease-in-out', // Easing function
            offset: 10, // Offset (in pixels) from the original trigger point
            once: false // Whether animation should only happen once
        });
    },[])

    return(
        <>
        <section className="colectionMain mt-5">
             <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-end">
                    <div data-aos="fade-right" className="collImgOne p-5 flex justify-end items-end">
                        <div>
                        <p>Hot List</p>
                            <h1 className="text-2xl bold">Womens Collection</h1>
                           <p>Shop now</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='collImgTwo p-4' data-aos="fade-left">
                    <div >
                        <p>Hot List</p>
                            <h1 className="text-2xl bold">Mens Collection</h1>
                           <p>Shop now</p>
                        </div>
                    </div>
                    <div className='flex' data-aos="fade-up">
                    <div className='collImgThree p-3'>
                    <div>
                        <p>Hot List</p>
                            <h1 className="text-2xl bold">Kids Collection</h1>
                           <p>Shop now</p>
                        </div>
                    </div>
                    <div className='collImgfour' ></div>
                    </div>
                    
                </div>
             </div>
        </section>
        </>    
    )
}