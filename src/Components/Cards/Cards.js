import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
const Cards = () => {
  const [cards, setCards] = useState([]);
  const foods = cards.slice(0, 3);
  // console.log(cards);
  useEffect(() => {
    fetch("https://afternoon-island-51531.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="bg-base-100  ">
      <div id="features" className="container content-center">
        <h1 className=" text-center mt-5 fw-bold feature res-food">
          OUR POPULAR UPDATE & NEW FOOD
        </h1>
        <p className="text-center mt-4 fw-500 res-explore">
          Explore our exclusive categories, find photographers <br/> you would
          love to explore and hire.
        </p>

        <div className="services items-center py-12 res-inventory-card">
          {foods.map((card) => (
            <Card key={card._id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
