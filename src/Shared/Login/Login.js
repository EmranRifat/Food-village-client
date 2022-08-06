import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const Login = () => {
  // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  let from = location.state?.from?.pathname || "/";
  var isSignup = false;

  const [token] = useToken(user, isSignup);

  let errorElement;

  // if (loading ) {
  //   return <Loading></Loading>;
  // }
  if(user){
      navigate('/Dashboard')
  }
  if (token) {
    navigate(from, { replace: true });
    // console.log("token from login",token);
  }

  if (error ) {
    errorElement = (
      <div>
        <p className="text-red-500 mb-2">
          <small>Error: {error?.message }</small>
        </p>
      </div>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    toast.success("Successfully Loged In");
  };

  return (
    <div className="flex h-screen justify-center  bg-base-200 items-center">
      <div className="card w-96 bg-base-100 ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-zA-Z0-9-]/,
                    message: "error message",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    errors.email.message
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    errors.email.message
                  </span>
                )}
              </label>
            </div>
            <div className=" w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password is required must be 6 character ",
                  },
                  pattern: {
                    value: /[a-zA-Z0-9-]/,
                    message: "error message",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {errorElement}
            <input
              className="btn w-full max-w-xs "
              type="submit"
              value="Login"
            />
          </form>

          <p>
     
            <small>
              New to our website-
              <Link className="text-red-500 " to="/signup">Create New Account</Link>
            </small>
          </p>

          {/* <div className="divider">OR</div> */}
          {/* <button onClick={() => signInWithGoogle()}className="btn btn-outline btn btn-accent">
            CONTINUE WITH GOOGLE
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
