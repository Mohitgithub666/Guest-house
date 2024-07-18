import React from "react";
import "./Contact.css";
import { Design } from "../../Components/Design/Design";
import Palash from "../../assets/palash.webp";
import { Contactdata } from "../../Components/Data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Contact = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <section id="contact">
        <div className="container contact-con">
          <div className="two-con-contact">
            <motion.div
              initial={{ left: "-15%" }}
              whileInView={{ left: "0%" }}
              transition={transition}
              className="left-cont"
            >
              <Design image={Palash} />
            </motion.div>
            <div className="right-cont">
              <div className="des-con">
                <span>Contact Us</span>
                <motion.h1
                  initial={{ x: "25%" }}
                  whileInView={{ x: "0%" }}
                  transition={transition}
                >
                  Easy to contact us.
                </motion.h1>
                <p>
                  is there a problem a finding your dream room?Need a guide in
                  buying your room?or Need a consultation? just contact us.
                </p>
              </div>
              <div className="des-con-bottom">
                {Contactdata.map(
                  ({ id, Icon, Name, Number, Btnname, path }) => {
                    return (
                      <div className="box" key={id}>
                        <div className="box-tag">
                          <h1>{Icon}</h1>
                          <div className="tag-con">
                            <h2>{Name}</h2>
                            <p>{Number}2</p>
                          </div>
                        </div>
                        <Link to={path}>
                          <button className="btn">{Btnname}</button>
                        </Link>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
