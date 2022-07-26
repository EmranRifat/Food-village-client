// import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    //         // console.log('user inside useToken ', user);

    const email = user?.user?.email;
    const uid = user?.user?.uid;
    const accessToken = user?.user?.accessToken;
    const currentUser = { email: email, uid: uid, accessToken: accessToken };

    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('data inside  useToken ', data);
          const Token = data.token;
          // console.log(Token);
          localStorage.setItem("accessToken", Token);
          setToken(Token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
