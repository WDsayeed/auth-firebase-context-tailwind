import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Login = () => {

        const {signIn} = useContext(AuthContext)

        const handleLogin = event =>{
                event.preventDefault()
                const form = event.target
                const email = form.email.value
                const password = form.password.value
                console.log(email, password)
                signIn(email, password)
                .then(result=>{
                        const loggedIn = result.user 
                        console.log(loggedIn)
                })
                .catch(error=>{
                        console.log(error)
                })
        }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>New to Auth Master?<Link className="btn btn-link" to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
