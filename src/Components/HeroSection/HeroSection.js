import React from 'react';
import { Table } from 'react-bootstrap';
import hero1 from '../../Assets/Images/img-10-683x1024.jpg'
import hero2 from '../../Assets/Images/img-8-2-758x1024.jpg'
const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img  src={hero1} className="w-25 rounded-lg  shadow-2xl" />
          <img src={hero2} className="max-w-sm rounded-lg shadow-2xl" />
         
          <div className='w-400'>
            <h1 className="text-4xl text-accent font-bold mb-4 ">STARTERS..!</h1>
          
           <Table striped bordered hover >
  <thead>
    <tr className='w-200'>
      <th></th>
      <th>Food Name</th>
      <th></th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td ><span className='fw-bold fs-4'> Purple Corn Tostada</span>
        <p><small>Ricotta, goat cheese, beetroot and datterini.

</small></p>
        	</td>
      <td>=============</td>
      <td>$ 36	</td>
    </tr>
    <tr>
      <td>2</td>
      <td><span  className='fw-bold fs-4'>Fresh Oysters Dozen</span>
      <p><small>Ricotta, goat cheese, beetroot and datterini.

</small></p>
      </td>
      <td>=============</td>
      <td>$ 40</td>
    </tr>
    <tr>
      <td>3</td>
      <td> <span className='fw-bold fs-4'>  Wild Mushroom Arancini</span>
      <p><small>Ricotta, goat cheese, beetroot and datterini.

</small></p>	</td>
      <td>=============</td>
      <td>$ 25</td>
    </tr>
    
  </tbody>
</Table>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;