import React from "react";
import Text from "../../atom/Text";
import OpenList from "./OpenList";
import OpenCard from "./OpenCard";
import { Element } from "react-scroll";

const Openings = () => {
  
  const openings = OpenList.map((list) => (
    <OpenCard
      key={list.id}
      jobtitle={list.jobTitle}
      availability={list.availability}
      duration={list.duration}
      city={list.city}
      bgcol={list.bgcol}
      coll={list.color}
    />
  ));
  return (
      <Element id="openpage" name="openpage">
    <div className="open-box p-3 p-lg-5">

      <Text
        className="start-head colordark text-center fs-4"
        children="Join our Team"
        />
      <Text
        className="colorlight text-center"
        children="Check out our recent openings"
        />
      <div className="py-3">
        {openings.length > 0 ? (
          openings
          ) : (
            <div className="open-card text-center colordark fw-bold py-4">
            There is no active opening at the moment. Check back later
          </div>
        )}
      </div>
    </div>
        </Element>
  );
};

export default Openings;
