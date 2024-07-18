import React from "react";
import "./Design.css";

export const Design = ({ image }) => {
  return (
    <>
      <main>
        <div className="right-img">
          <img src={image} alt="Image.." />
        </div>
      </main>
    </>
  );
};
