import React from 'react';
import './Card.css'
import { Link, useNavigate } from 'react-router-dom';

const Card = ({card}) => {
    const navigate = useNavigate();

    const navigateServiceDetail=id=>{
    navigate(`/user/${id}`);
}

    
    const { name, img, _id, price, description, quantity, supplier } = card;
    return (
        <div className=' card-section '>
        <div className="item-card" style={{ width: "18rem" }}>
            <img className='w-100 card-img-top' style={{ height: "12rem" }} src={img}  alt="..." />
            <div  style={{ height: "15rem" }}className="card-body ">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p > <small>  id: {_id}</small></p>
                <p className=' fw-bold price text-xl'><small>Price: {price}</small></p>
                <p className=' fw-bold price '><small>Quantiy: {quantity}</small></p>
                <small className='supplier'>Chef: {supplier}</small>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
             </div>
                                {/* <p id='p-id'> Id :{id}</p> */}

                <div className='flex gap-8'>
                <button onClick={() => navigateServiceDetail(_id)} className="btn btn-primary btn-sm  ">Details</button>

                {/* <button href="" className="btn1 px-2">Details</button> */}
              <Link to="/inventory">  <button className="btn btn-accent btn-sm">Order Now</button></Link>
                {/* <button  href="" className="btn2  px-2  ">Order Now</button> */}

                </div>
              
            </div>
        </div>
    </div>
  
    );
};

export default Card;