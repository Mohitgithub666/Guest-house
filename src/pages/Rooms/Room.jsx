import React from "react";
import "./Room.css";
import { motion } from "framer-motion";
import { data } from "../../Components/Data/Data";
import { Link } from "react-router-dom";

export const Room = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <main id="rooms" className="room-head">
        <div className="container room-con">
          <div className="room-det">
            <span>Best Choice</span>
            <motion.h1
              initial={{ x: "-25%" }}
              whileInView={{ x: "0%" }}
              transition={transition}
            >
              OUR LIVING ROOMS<span>.</span>
            </motion.h1>
          </div>
          <div className="room-card-con">
            {data.map((item) => {
              return (
                <div className="room-card" key={item.id}>
                  <div className="top-div">
                    <img src={item.img} alt="rooms image" />
                  </div>
                  <div className="bottom-div">
                    <h1>
                      <span>₹⟩ </span>
                      {item.price}
                    </h1>
                    <h2>{item.title}</h2>
                    <p>{item.para}</p>
                    <button className="room-btn">
                      <Link to={item.path}>Book now</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
