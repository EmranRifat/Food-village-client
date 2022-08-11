import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './InventoryItem.css'
import { toast } from "react-toastify";

const InventoryItem = ({item,setOrder}) => {

    const [user] = useAuthState(auth);

    const { name, img, _id, price, description, quantity, supplier } = item;

    return (

           
 <div className=' card-section py-2 '>
        <div className="item-card res-food-card ml-4" style={{ width: "16rem" }}>
            <img className=' card-img-top' style={{ height: "10rem" }} src={img}  alt="..." />
            <div className="card-body mt-2 "  style={{ height: "12rem" }}>
                <h5 className=" card-title ">{name}</h5>
                {/* <p className="card-text">{description}</p> */}
                <p className=' fw-bold price '><small>Price: {price}</small></p>
                <p className='  price '><small>Id: {_id}</small></p>
                <p className=' price '><small>Quantiy: {quantity}</small></p>
                <small  className='supplier'>Supplier: {supplier}</small>
            <div className="rating leading-3 ">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
             </div>
                                {/* <p id='p-id'> Id :{id}</p> */}

                <div className='flex'>

        
                <label
                 htmlFor="my-modal-6" 
                onClick={()=>{
                    if(user){
                        setOrder(item)
                    }
                    else{
                        toast.error("Login first..!")
                    }
                   
                
                }}
                className="btn modal-button btn btn-sm res-food-btn font-bold text-white bg-gradient-to-r from-accent to-primary border-none  ml-9 btn-sm"><i className="fa-solid px-1 fa-cart-plus"></i> Order Now 
                </label>

                </div>
              
            </div>
        </div>
    </div>
      
       
    );
};

export default InventoryItem;