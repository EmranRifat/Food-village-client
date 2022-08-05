import Carousel from "react-bootstrap/Carousel";
// import banner1 from "../../Assets/Images/banner/fruits.png";
// import banner2 from "../../Assets/Images/banner/mixed.png";
import banner3 from "../../Assets/Images/pizza.jpg";
import burger from "../../Assets/Images/pexels-photo-1633578.jpeg";
import more from "../../Assets/Images/jonathan-borba-PKQNnZCWwzs-unsplash-removebg-preview.png";
import anh from "../../Assets/Images/anh-nguyen-kcA-c3f_3FE-unsplash-removebg-preview.png";
import baid from "../../Assets/Images/baiq-daling-ykThMylLsbY-unsplash-removebg-preview.png";
import "./Banner.css";
import React from "react";
const Banner = () => {
  return (
    // className="banner" for Carosal
    <Carousel >
      <Carousel.Item>
     
        {/* <img className="d-block w-100 " src={banner3} alt="First slide" />
        <div className="overlay"></div> */}







    <div class="hero min-h-screen bg-base-200 relative ">
  <div class="hero-content flex lg:flex-row-reverse">
{/* --------- */}


<div className="">
              <div className="absolute  ">
              <img className="anh-001" src={anh} alt="" />
                <div class="card w-72 h-24 bg-base-100 shadow-xl  arrow-card">
                  <div className="flex ">
                    <div id="card-100" class="card-body pl-20 ">
                      <div className="pb-4">
                        <h2 class="card-title Vagetable"><small>Vagetable rice</small></h2>
                        <div class="rating ratting rating-sm  grid justify-items-stretch  ">
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                            checked
                          />
                        </div>
                        <p className=" pb-2"><small>From here to home</small></p>
                      </div>

                    
                    </div>
                  </div>
                </div>
              </div>
            </div>




{/* --------- */}
<div className=" absolute">
                <img id="img-0014" className="img-more" src={more} alt="pizza" />
                <div class="card w-60 h-40 bg-base-100 shadow-xl singlecard ">
                  <div className="flex">
                    <div class="card-body card-mini text-center ">
                      <div className="mb-12">
                        <h2 class="text-xl fw-bold"><small> Good and Fresh</small></h2>
                        <div class="rating rating-sm  grid justify-items-stretch  ">
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                            checked
                          />
                        </div>
                        <p className="mb-4 "><small>Tom/Mirk7 Orievbal <br /> UM,DHAKA</small></p>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
{/* -------------------------- */}
<div className="">
              <div className="absolute  ">
              <img className="anh-002" src={baid} alt="" />
                <div class="card w-72 h-28 bg-base-100 shadow-xl  arrow-card2">
                  <div className="flex ">
                    <div id="fride01" class="card-body  pl-20 ">
                      <div>
                        <h2 class="card-title"><small>Fride Rice</small></h2>
                        <div class="rating rating-sm  grid justify-items-stretch  ">
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            class="mask mask-star-2 bg-orange-400"
                            checked
                          />
                        </div>
                        <p className="">From here to home</p>
                      </div>

                    
                    </div>
                  </div>
                </div>
              </div>
            </div>



    <img src={burger} alt="food" className=" h-auto ml-20 rounded-3xl shadow-2xl img-slider" />
    <div>
      <h1 class="text-5xl font-bold">Our food site makes it easy <br /> to find local foods</h1>
      <p class="py-6">Imagine you don't need a diet provide healthy  and delicious toad for You! <br /> We provide the best food delivery services..</p>
      <button class="btn btn-warning px-4 fw-bold  py-2  rounded-3xl text-white ">Get Started</button>
      <button class="btn btn-accent px-4 fw-bold   py-2 slider-btn2 rounded-3xl text-white">order now </button>
    </div>
  </div>
</div>
        <Carousel.Caption>
    
          {/* <div className=" banner-text mb-5">
            <p>
              <small className="text-primary fw-bold ">2022 COLLECTION​</small>
            </p>
            <h2 className="text-4xl font-bold mb-2">
              All Your favourite is Right Here
            </h2>
            <p className="text-carousal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a className="button1" target="blank" href="{}">
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <div className="overlay"></div>
        <img className="d-block w-100" src={banner1} alt="Second slide" /> */}


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex lg:flex-row-reverse">
    <img src={banner3} alt="foodimg" className=" ml-20 rounded-3xl shadow-2xl img-slider" />
    <div>
      <h1 class="text-5xl font-bold">Our food site makes it easy <br /> to find local foods</h1>
      <p class="py-6">Imagine you don't need a diet provide healthy  and delicious toad for You! <br /> We provide the best food delivery services..</p>
      <button class="btn  btn-warning px-4  py-2 fw-bold  rounded-3xl text-white">Get Started</button>
      <button class="btn btn-accent rounded-3xl fw-bold slider-btn2  px-4 py-2 text-white">order now </button>
    </div>
  </div>
</div>


        <Carousel.Caption>
          {/* <div className=" banner-text mb-5">
            <p>
              <small className="text-accent fw-bold ">2022 COLLECTION​</small>
            </p>
            <h2 className="text-4xl font-bold mb-2">
              All Your favourite is Right Here
            </h2>
            <p className="text-carousal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.​
            </p>

            <a className="button1" target="blank" href="{}">
              prebook Now <i className="fas fa-arrow-right"></i>
            </a>
          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
