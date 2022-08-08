import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Review = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, event) => {
    event.target.value =('');

    fetch("https://git.heroku.com/secret-scrubland-79213.git/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Review send..!");
      });
  };

  return (
    <div>
      <div className="w-25 mx-auto my-4 ">
        <h2 className="text-center text-2xl text-accent fw-bold">
          Keep in Our Touch
        </h2>
        <form
          className="d-flex  flex-column table w-full mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{ border: "1px solid gray" }}
            className="mb-2 rounded-1"
            placeholder="Name"
            {...register("name", { required: true })}
          />

          <textarea
            style={{ border: "1px solid gray" }}
            className="mb-2 rounded-1 "
            placeholder="Description"
            {...register("description")}
          />

          <input
            style={{ border: "1px solid gray" }}
            className="mb-2 rounded-1"
            placeholder="Your Email"
            type="text"
            {...register("img")}
          />
          <input
            style={{ border: "1px solid gray" }}
            className="btn btn-secondary justify-center "
            type="submit"
            value="Send Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
