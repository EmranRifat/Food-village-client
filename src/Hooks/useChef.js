
// import React, { useEffect, useState } from "react"
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";
// import Loading from "../Shared/Loading/Loading";

// const useChef = () =>{
//     const [user,loading] = useAuthState(auth);
// if(loading){
//     return <p>Loading...</p>
// }
//     const [chef,setChef]=useState(false);
//     const [chefLoading, setChefLoading] = useState(true);


//     useEffect(()=>{
//         // console.log(user?.email);
//         var email=user?.email;
      
//      if(user){
//         fetch(`http://localhost:5000/chef/${email}`, {
//             method:'GET',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         .then(res=>res.json())
//         .then(data => {
//             console.log(data);
//             setChef(data.chef);
//             setChefLoading(false);
//             // setAdminLoading(false);
//         })

//      }

//     },[user])
//     return [chef,chefLoading]
// }
// export default useChef;