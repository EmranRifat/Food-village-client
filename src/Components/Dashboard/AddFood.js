import React from 'react';
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';


const AddFood = () => {
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data =>{
const url=`http://localhost:5000/foods`;
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
           <h2 className='text-center text-2xl text-accent ' >Add a new food</h2> 
           <form className='d-flex  flex-column table w-full mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Name'  {...register("name", { required: true})} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Chef-Name'  {...register("supplier", { required: true})} />
                <textarea style={{border:"1px solid gray"}} className='mb-2 rounded-1 ' placeholder='Description' {...register("description",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1 ' placeholder='Price' type="number" {...register("price",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Quantity' type="number" {...register("quantity",)} />
                <input style={{border:"1px solid gray"}} className='mb-2 rounded-1' placeholder='Photo URL' type="text" {...register("img",)} />
                <input style={{border:"1px solid gray"}}  className="btn btn-accent justify-center " type="submit" value="Add item" />
            </form>
       
     
        </div>
    );
};

export default AddFood;