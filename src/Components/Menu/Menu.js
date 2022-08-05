import React from 'react';
import burger from "../../Assets/Images/burger001-removebg-preview.png" ;
import "./Menu.css";
const Menu = () => {
    return (
        <div className='box'>
<div class="hero min-h-screen bg-base-100">
  <div class="hero-content menu-content  flex-col lg:flex-row-reverse">
<div className='pr-12'>

<div className='container-menu rounded-2xl '></div>

<img src={burger}className=" rounded-lg  w-auto burger object-none" alt='burger' />


    
</div>
    
    <div className='border-line' >
      <h1 class="text-5xl font-bold">Menu That  Always <br /> make You Feel in Love</h1>
      <ul class="menu bg-base-100 w-56">
 
  <button class="btn gap-2 mt-4">
  BreakFast
  <div class="badge badge-secondary">99 $</div>
</button>
  <button class="btn gap-2 my-2 btn-accent text-white">
  Lunch
  <div class="badge badge-secondary">99 $</div>
</button>
  <button class="btn gap-2">
  Dinner
  <div class="badge badge-secondary">99 $</div>
</button>
</ul>
    </div>
  </div>
</div>        </div>
    );
};

export default Menu;