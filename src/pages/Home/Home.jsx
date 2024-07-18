import React from "react";
import "./Home.css";
import { Gallery } from "../Gallery/Gallery";
import { motion } from "framer-motion";
import { Design } from "../../Components/Design/Design";
import Flower from "../../assets/flower.webp";
import { Link } from "react-router-dom";
export const Home = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <main className="hero-image">
        <div className="container hero-sec">
          <div className="left-h">
            <h1>
              Make Yourself At<span> Home In Our</span> Guest House.
            </h1>

            <motion.div
              initial={{ x: "-25%" }}
              whileInView={{ x: "0%" }}
              transition={transition}
              className="para-con"
            >
              <p> Simple - Unique - Friendly </p>
              <Link to="https://api.whatsapp.com">
              <button className="hero-btn">
                BOOK NOW
              </button>
              </Link>
            </motion.div>
            <div className="review">
              <div className="review-cus">
                <h2>
                  100 <span>+</span>
                </h2>
                <p>Bookings Complete</p>
              </div>
              <div className="review-cus">
                <h2>
                  150 <span>+</span>
                </h2>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ right: "-15%" }}
            whileInView={{ right: "0%" }}
            transition={transition}
            className="right-h"
          >
            <Design image={Flower} />
          </motion.div>
        </div>
      </main>

      <Gallery />
    </>
  );
};
