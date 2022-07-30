import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useQuery} from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';
import UserRow from './UserRow';

const AllUsers = () => {
    const user = useAuthState(auth);
    // console.log(user);
    const [deletingUser,setDeletingUser]=useState(null);


    const { data:users, isLoading ,refetch} = useQuery('users', () => fetch('https://obscure-mountain-92630.herokuapp.com/users',{
       method:'GET',
       headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
       } 
    }).then(res => res.json()));
    // console.log(users);
    if(isLoading){
        return <Loading></Loading>
    }
// const makeAdmin=()=>{
   
//     fetch(`https://obscure-mountain-92630.herokuapp.com/users/admin/${''}`)

// }
    
    return (
        <div>
        <h2 className='fw-bold text-warning'>Total User : {users.length}</h2>
        <div className="overflow-x-auto">
                <table className="table w-full">
                   
                <thead>
                    <tr>
                        <th></th>
                        
                        <th className="active">email</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Status</th>
                        {/* <th>Time</th> */}
                        {/* <th>Treatment</th> */}
                    </tr>
                </thead>
                <tbody>
                 {
                    users.map((user,index)=><UserRow
                    key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                    setDeletingUser={setDeletingUser}
                    ></UserRow>)
                 }
                </tbody>
            </table>
        </div>
        {
            deletingUser && <DeleteModal
            deletingUser={deletingUser}
            setDeletingUser={setDeletingUser}

        refetch={refetch}
            ></DeleteModal>
        }
    </div>
    );
};

export default AllUsers;

   
       
    
    
    