import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletingUser,refetch,setDeletingUser}) => {
    // console.log(deletingUser);
const {email}=deletingUser;

const handleDelete=()=>{
    fetch(`http://localhost:5000/users/${email}`,{
        method:'DELETE',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
           } 
        
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.deletedCount){
            toast.success(`User:${email} is deleted.`)
            setDeletingUser(null);
            refetch();
        }
    })

}



    return (
        <div>

<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are you sure want to delete {email}!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">

      <label for="delete-modal" className="btn btn-xs">Cancel</label>
      <button onClick={()=>handleDelete(email)} className="btn btn-xs btn-error "> Delete User</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default DeleteModal;