import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Login(){

   useEffect(()=>{
      AOS.init({
          duration: 800, // Duration of animation (in milliseconds)
          easing: 'ease-in-out', // Easing function
          offset: 100, // Offset (in pixels) from the original trigger point
          once: false // Whether animation should only happen once
      });
  },[])


    return(
        <>
         <div className="formBg" >
        <div className="formWarpMain">
           <div className="formWarp" data-aos="fade">
        <Link onClick={()=>window.history.back()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
</Link>
                  <h3 className="mb-4 text-white text-center bangers-regular">Login here</h3>
                  <form>
             <div className="my-3 inptDiv"  data-aos="fade-right"><input type="email" className="formInpt" placeholder="" required="required"  />  <span className="text-white label bangers-regular">Email</span>  </div>
             <div className="my-3 inptDiv" data-aos="fade-left"><input type="password" className="formInpt" placeholder=""  required="required"  />  <span className="text-white label bangers-regular">Password</span>  </div>
             <div className="mt-4" data-aos="fade-right"> <input type="submit" value="Login" className="formSubmit"/></div>
                </form>
                <div className="my-3" data-aos="fade-left"> <p className="text-white pacifico-regular">Don't have an account ?  <Link to="/register" className="text-white">Register</Link>  </p></div>
          </div>
        </div>
      </div> 
    
         </>
    )
}