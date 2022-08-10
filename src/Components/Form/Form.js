import React from 'react';
import "./Form.css";
import ring1 from "../../Assets/Images/Group 4.png"
import ring2 from "../../Assets/Images/Group 3.png"

const Form = () => {
    return (

       <div >


         <div className='ring-card flex mt-12  '> 
         <div>
           <img className='ring-burger  w-20 ' src={ring1} alt="ring" />
           </div>

           <div class="card res-burger-card w-8/12 rounded-3xl bg-neutral text-neutral-content">   
           <div class="card-body flex card-height ">
            <div className=' '>
            <h2 class=" font-bold res-bold text-3xl">Discover Restaurant near From You</h2>
             <p className='res-burger-p'>We are using cookies for no reason.</p>
             <div class="card-actions justify-center">
             <button style={{"backgroundColor":"orange"}} class="btn  mx-4 rounded-3xl text-white">Get Started</button>
            </div>
             </div>
           </div>
         </div>
         <div>
           <img className='ring-burger2  w-20 ' src={ring2} alt="ring" />
           </div>


           </div>
           
       </div>
    );
};

export default Form;