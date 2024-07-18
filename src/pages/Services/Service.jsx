import React from "react";
import "./service.css";
import { Design } from "../../Components/Design/Design";
import Serviceimg from "../../assets/service.webp";
import { MdOutlineSecurity } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { IoRestaurantSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import {motion} from 'framer-motion'

export const Service = () => {
  const transition={ duration: 2,type:'spring' }
  return (
    <>
      <section id="service">
        <div className="container  service-con">
          <div className="two-con-ser">
            <div className="left-ser">
              <span>Our Value</span>
              <motion.h1
              initial={{ x: "-25%" }}
              whileInView={{ x: "0%" }}
              transition={transition}
              >
                Value We Give To You<span>.</span>
              </motion.h1>
              <p>
                We always ready to help by providing the best service for you,
                We believe a good place to live can make your life better
              </p>
              <div className="ser-detail">
                <div className="ser-card">
                  <span>
                    <MdOutlineSecurity />
                  </span>
                  <h3>High Class Security</h3>
                </div>
                <div className="ser-card">
                  <span>
                    <RiServiceFill />
                  </span>
                  <h3>24 Hours Room Service</h3>
                </div>
                <div className="ser-card">
                  <span>
                    <IoRestaurantSharp />
                  </span>
                  <h3>Restaurant</h3>
                </div>
                <div className="ser-card">
                  <span>
                    <FaBookOpen />
                  </span>
                  <h3>Tourist Guide Support</h3>
                </div>
              </div>
            </div>
            <motion.div
             initial={{ right: "-15%" }}
             whileInView={{ right: "0%" }}
             transition={transition} 
             className="right-ser">
              <Design image={Serviceimg} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
