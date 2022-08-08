// import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";

const useToken = (user, isSignup) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    //         // console.log('user inside useToken ', user);

    const email = user?.user.email;
    const uid = user?.user?.uid;
    const accessToken = user?.user?.accessToken;
    var currentUser;

    if (isSignup) {
      currentUser = { email: email, uid: uid, accessToken: accessToken, role: 'user'};
    } else{
      currentUser = { email: email, uid: uid, accessToken: accessToken}
    }


    if (email) {
      fetch(`
https://afternoon-island-51531.herokuapp.com






/users/${email}`, {
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
