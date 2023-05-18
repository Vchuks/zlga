import React from "react";
import { useState } from "react";
import 'boxicons'

const FaqCard = ({list}) => {
  const [title, setTitle] = useState(false);
  const {question,answer} = list

  const handleState = () => {
    setTitle(!title);
  };

  return (
    <div className="faqpoint">
      {!title && (
        <div
          className="w-100 py-3 d-flex align-items-center justify-content-between border-bottom "
          onClick={handleState}
        >
          <h5 className="d-flex align-items-center w-100">
            {question}
          </h5>
          <box-icon name="chevron-up" color="#272727" ></box-icon>
        </div>
      )}
      {title && (
        <div
          className="w-100 py-3 d-flex align-items-center justify-content-between "
          onClick={handleState}
        >
          <h5 className="d-flex colordark fw-bold align-items-center w-100">
            {question}
          </h5>
          <box-icon name="chevron-down" color="#272727" ></box-icon>
        </div>
      )}
      {title && (
        <div className=" border-bottom  ">
          <p className="colorlight">
           {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
