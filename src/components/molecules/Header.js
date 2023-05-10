import React from "react";
import Text from "../atom/Text";
import comp from "../../images/Comp 1.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Header = () => {
  return (
    <div className="row px-3 py-3 px-lg-5 align-items-center header">
      <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="zoom-in-up" data-aos-duration="2000">
        <h1 className="head-text">
          The Environmental Management{" "}
          <span className="colorgreen">Experts.</span>
        </h1>
        <Text
          className="colorlight head-text2"
          children="We are an alliance that covers a wide range of activities that affects the lifestyle of individuals and communities in their immediate environment."
        />
        <div className="headstat d-flex justify-content-between">
          <div className="text-center">
            <Text className="colorgreen m-0 head-text3" children="7000+" />
            <Text className="colorlight m-0" children="Employees" />
          </div>
          <div className="text-center">
            <Text className="colorgreen m-0 head-text3" children="95%" />
            <Text
              className="colorlight m-0"
              children="Customers Satisfaction"
            />
          </div>
          <div className="text-center">
            <Text className="colorgreen m-0 head-text3" children="90,000+" />
            <Text
              className="colorlight m-0"
              children="Tonnes of Trash recycled"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="zoom-in-up" data-aos-duration="2000">
        <Player
          autoplay
          loop
          src={comp}
          style={{ height: "100%", width: "100%" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </div>
  );
};

export default Header;