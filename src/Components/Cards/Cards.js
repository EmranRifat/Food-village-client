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
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="bg-base-200 p-10">
      <div id="features" className="container">
        <h1 className=" text-center mt-5 fw-bold feature">
          OUR FEATURED CATEGORIES
        </h1>
        <p className="text-center mt-4 fw-500">
          Explore our exclusive categories, find photographers <br /> you would
          love to explore and hire.
        </p>

        <div className="services">
          {foods.map((card) => (
            <Card key={card._id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
