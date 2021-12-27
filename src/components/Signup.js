import React from "react";
import SignupForm from "./SignupForm";
import rocketImg from '../assets/rocket.png';

export const Signup = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
        <SignupForm />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100 animated" src={rocketImg} alt="Rocket and a Man"/>
        </div>
      </div>
    </div>
  )
};


