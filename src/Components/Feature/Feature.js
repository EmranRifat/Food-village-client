import React from "react";
import offer from "../../Assets/Images/offer.png"
import food from "../../Assets/Images/nikolay-smeh-gPpbFaEkl00-unsplash-removebg-preview.png"
import delevary from "../../Assets/Images/Background.png";
import "./Feature.css";
const Feature = () => {
  return (
    <div className=" bg-base-100 py-12 container">
      <h1 className="text-center font-bold text-4xl py-4">Features</h1>
      <p className="text-center ">
        This lesson provide a basic framework for conducting a recipe
        demonstration
      </p>

      <div className="d-flex justify-center items-center gap-4  py-4">
        
        <div class="card w-25 bg-base-100 res-card shadow-2xl bg-base-100 border-none hover:bg-violet-400">
          <figure class="px-10 pt-10">
            <img
              src={offer}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Discount Boucher!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        
        <div class="card res-card w-25 bg-base-300 shadow-2xl bg-base-100 border-none hover:bg-violet-400 ">
          <figure class="px-10 pt-10">
            <img
              src={food}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Fresh & healthy food!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        
        <div class="card res-card w-25 bg-base-100 shadow-2xl bg-base-100 border-none hover:bg-violet-400">
          <figure class="px-10 pt-6">
            <img
              src={delevary}
              alt="Shoes"
              class="rounded-xl "
            />
          </figure>
          <div class="card-body items-center text-center ">
            <h2 class="card-title">Fast home delevary!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
