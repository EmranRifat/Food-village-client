import React from 'react';
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';


const AddFood = () => {
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data =>{
const url=`https://git.heroku.com/secret-scrubland-79213.git


/foods`;
fetch (url,{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(data)

})
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    toast('Food Added Successfully..!')
})




        // console.log(data);
    } 
    return (
        <div className='w-50 mx-auto'>
           <h2 className=' text-2xl text-accent ' >Add a new food</h2> 
           <form className='d-flex  flex-column table w-full mt-4' onSubmit={handleSubmit(onSubmit)}>
              
           <input type="text" placeholder="Food Name" className="input input-bordered w-full max-w-xs my-1" />
           <input type="text" placeholder="Chef-Name" className="input input-bordered w-full max-w-xs my-1" />
           <input type="text" placeholder="Food Description" className="input input-bordered w-full max-w-xs my-1" />
           <input type="text" placeholder="Food-Price" className="input input-bordered w-full max-w-xs my-1" />
           <input type="text" placeholder="Quantity" className="input input-bordered w-full max-w-xs my-1" />
           <input type="text" placeholder="Photo-URL" className="input input-bordered w-full max-w-xs" />
           <input  
           className="btn btn-accent justify-center input input-bordered w-full max-w-xs btn btn-accent my-1 " type="submit" value="Add Food" />

                {/* <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Name'  {...register("name", { required: true})} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Chef-Name'  {...register("supplier", { required: true})} />
                <textarea style={{border:"1px solid gray"}} className='mb-2 rounded-1 ' placeholder='Description' {...register("description",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1 ' placeholder='Price' type="number" {...register("price",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Quantity' type="number" {...register("quantity",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Photo URL' type="text" {...register("img",)} />
                <input style={{border:"1px solid gray"}}  className="btn btn-accent justify-center " type="submit" value="Add item" /> */}
            </form>
       
     
        </div>
    );
};

export default AddFood;