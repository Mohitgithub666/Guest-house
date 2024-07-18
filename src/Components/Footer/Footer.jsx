import React from "react";
import "./Footer.css";
import FB from "../../assets/facebook.webp";
import Insta from "../../assets/instagram.webp";
import Youtube from "../../assets/youtube.webp";
import Twitter from "../../assets/twitter.webp";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container foot-con">
          <div className="foot-two-col">
            <div className="left-foot">
              <h1>Kingsukh Guest House</h1>
              <p>
                Our vision is to make all people the best place to live for them
              </p>
              <div className="social-med">
                <Link>
                  <img src={FB} alt="facebook" />
                </Link>
                <Link>
                  
                  <img src={Insta} alt="instagram" />
                </Link>
                <Link>
                  
                  <img src={Youtube} alt="Youtube" />
                </Link>
                <Link>
                
                  <img src={Twitter} alt="Twitter" />
                </Link>
              </div>
              <span> &copy;2024 Kingsukh Guest House.All right reserved</span>
            </div>
            <div className="right-foot">
              <div className="foot-box">
                <h1>About us</h1>
                <p>About us</p>
                <p>Features</p>
                <p>Security</p>
              </div>
              <div className="foot-box">
                <h1>Our Service</h1>
                <p>Concierge Assistance</p>
                <p>Flexible Booking Options</p>
                <p>Wellness & Recreation</p>
                <span>Terms & Agreement</span>
              </div>
              <div className="foot-box">
                <h1>Contact us</h1>
                <p>+91 1.2.3.4.5</p>
                <span>Privacy & Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
