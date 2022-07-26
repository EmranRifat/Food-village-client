import React from "react";
import { Link } from "react-router-dom";
import book from "../../Assets/Images/book.png";
import "./Book.css";
const Book = () => {
  return (
    <section className="testclass">
      <div
        className="mt-10  "
        style={{
          background: `url(${book})`,
          backgroundSize: "cover",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="  text-center ">
          <div className=" mt-20">
            <h2 className="text-4xl text-white pt-20  font-bold ">
              We are distinguished by comfortable seats Unique meals with <br />
              Professionals chefs
            </h2>

            <p className="text-white pl-8">
              <small>
                Writers and stars of Veep have responded incredulously to the
                news an Australian
                <br /> politician required stitches after knocking himself
                unconscious .
              </small>
            </p>
          </div>
          <div className=" mt-4 ">
            <Link to="/inventory">
              
              <button className="btn btn-accent rounded-3xl">
                Book a meal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
