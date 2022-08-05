import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div>
      <div className='py-10'>
        <h2 className='font-bold text-3xl text-center pb-4'>Pricing</h2>
        <p style={{"color":"gray"}} className='text-center pb-20 '>Allawdain yore dishes from everywhere .And new dishes.</p>
      </div>
   


<div className='relative '>
  
<div className="rotate-pricing rounded-3xl  "></div>
   <div className='flex justify-center gap-4 mb-40'>
       
   <div class="card w-72  shadow-2xl bg-base-100 border-none ">
  <div class="card-body card-body1 text-left">
    <h2 class=" font-bold text-3xl">Free ..!</h2>
    <p><small style={{"color":"gray"}}> 1 month for free</small></p>
    <h1 className='text-4xl font-bold'>$0</h1>
    <p><small>No actnakiin tees</small></p>
    <p><small>No hidden costs ti </small></p>
    <p><small>No review based nothing </small></p>
    <p><small>Unlinked orders included</small></p>
    <p><small>(Fair use)=Only Smartphone/</small></p>
    <div class="card-actions justify-end">
    <button class="btn btn-accent rounded-3xl text-white">Get Started </button>    </div>
  </div>
</div>

<div  className="rotate-black rounded-3xl"></div>

   <div  class="card w-72  shadow-2xl bg-base-100 border-none bg-black ">
  <div class="card-body card-body1 text-left">
    <h2 class=" text-2xl text-white">Normal ..!</h2>
    <p><small style={{"color":"gray"}}> 1 month for free</small></p>
    <h1 className='text-4xl font-bold text-white'>$50</h1>
    <p><small  style={{"color":"gray"}} >No actnakiin tees</small></p>
    <p><small  style={{"color":"gray"}}>No hidden costs ti </small></p>
    <p><small  style={{"color":"gray"}}>No review based nothing </small></p>
    <p><small  style={{"color":"gray"}}>Unlinked orders included</small></p>
    <p><small  style={{"color":"gray"}}>(Fair use)=Only Smartphone/</small></p>
    <div class="card-actions justify-end">
    <button style={{"backgroundColor":"red"}} class="btn rounded-3xl text-white">Get Started </button> 
    </div>
  </div>
</div>
   </div>
</div>
    
    </div>
  );
};

export default HeroSection;