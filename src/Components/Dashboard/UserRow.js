import React from "react";
// import { useState } from "react";
import { toast } from "react-toastify";

const UserRow = ({ index, user, refetch, setDeletingUser }) => {
  const { email, _id, role } = user;


  const roleChange = (roleset) => {
    fetch(`https://obscure-mountain-92630.herokuapp.com/users/role/${email}/${roleset}`, {
      method: "GET",
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
      <td>{role} </td>
      <th>   </th>
      <td>
        
          
        {role !== "admin" ? 
          <button onClick={() => roleChange("admin")} className="btn btn-xs">
            Make Admin
          </button> : <button onClick={() => roleChange("user")} className="btn btn-error btn-xs">
            Remove Admin
          </button> }    
        </td>
        <td>
         {role !== "chef"?
          <button onClick={() => roleChange("chef")} className="btn btn-xs">
            Make Chef
          </button> : <button onClick={() => roleChange("user")} className="btn btn-error btn-xs">
            Remove Chef
          </button>}

       
      </td>

      <td>
        <label
          onClick={() => setDeletingUser(user)}
          htmlFor="delete-modal"
          className="btn btn-xs btn-error ">
          Delete  <i className="fa-solid fa-trash-can mx-1"></i>
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
