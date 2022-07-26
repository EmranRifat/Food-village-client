import React from "react";
// import { useState } from "react";
import { toast } from "react-toastify";

const UserRow = ({ index, user, refetch, setDeletingUser }) => {
  const { email, _id, role } = user;

const makeChef=()=>{
  fetch(`http://localhost:5000/users/chef/${email}`,{
    method:"PUT",
    headers:{ authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }
  })
  .then(res=>res.json())
  .then(data=>{
    // console.log(data);
    if(data.modifiedCount>0){
      refetch();
      toast.success(`Successfully made a Kitchen chef`);
    }
  })

}

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{email}</th>
      <td>{_id} </td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs"> Make admin</button>)}
      </td>
      <td>
        {role !== "chef" && (
          <button onClick={makeChef} className="btn btn btn-xs"> Make Chef</button>)}
      </td>

      <td>
        <label
          onClick={() => setDeletingUser(user)}for="delete-modal"className="btn btn-xs btn-error "> Delete User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
