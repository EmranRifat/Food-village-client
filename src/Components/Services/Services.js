import React from "react";
import "./Services.css";
import cut from "../../Assets/Images/pizza.png";
import fernando from "../../Assets/Images/fernando-andrade-_P76trHTWDE-unsplash-removebg-preview.png";
import musroom from "../../Assets/Images/editrted.png";
const Services = () => {
  return (
    <div id="card-container ">
      <div className="pb-10">
        <h2 className="font-bold text-4xl text-center pt-6 text-accent">
          Our Customer Services
        </h2>
        <p className="  text-center pt-4">
          Maintain your dishes from everywhere. add new dishes, upload <br />
          photos,adapt
        </p>
      </div>
      <div className="bg-base-100">
        <div className="relative">
          <div>
            <div className="rotate rounded-2xl   "></div>
          </div>

          <div className="grid grid-cols-2 gap-4 card-grid ">
            <div className="card1 relative">
              <div className="relative ">
                <img id="img-001" className="img1 " src={cut} alt="pizza" />
                <div class="card w-64 h-40 bg-base-100 shadow-xl ">
                  <div className="flex">
                    <div class="card-body card-mini  ">
                      <div>
                        <h2 class="card-title">Sausage Pizza</h2>
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
                        <p className="font-bold">7.56</p>
                      </div>

                      <div class="card-actions justify-end">
                        <i class="fa-solid fa-plus "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card3">
              <div className="relative  ">
                <img
                  id="img-007"
                  className="img1 "
                  src={fernando}
                  alt="pizza"
                />
                <div class="card w-64 h-40 bg-base-100 shadow-xl ">
                  <div className="flex">
                    <div class="card-body card-mini  ">
                      <div>
                        <h2 class="card-title">Ittalian Pizza</h2>
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
                        <p className="font-bold">7.56</p>
                      </div>

                      <div class="card-actions justify-end">
                        <i class="fa-solid fa-plus "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card2">
              <div className="relative ">
                {/* <div className='rotate rounded-2xl '></div> */}

                <img id="img-003" className="img1 " src={musroom} alt="pizza" />
                <div class="card w-64 h-40 bg-base-100 shadow-xl ">
                  <div className="flex">
                    <div class="card-body card-mini  ">
                      <div>
                        <h2 class="card-title">Mushroom Pizza</h2>
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
                        <p className="font-bold">7.56</p>
                      </div>

                      <div class="card-actions justify-end">
                        <i class="fa-solid fa-plus "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card4">
              <div className="relative">
                {/* <div className='rotate rounded-2xl '></div> */}

                <img id="img101" className="img1 " src={cut} alt="pizza" />
                <div class="card w-64 h-40 bg-base-100 shadow-xl ">
                  <div className="flex">
                    <div class="card-body card-mini  ">
                      <div>
                        <h2 class="card-title">Fernando Pizza</h2>
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
                        <p className="font-bold">7.56</p>
                      </div>

                      <div class="card-actions justify-end">
                        <i class="fa-solid fa-plus "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
