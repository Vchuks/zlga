import React from "react";
import HeaderM from "../organisms/medical/HeaderM";
import WWH from "../organisms/medical/WWH";
import What from "../organisms/medical/What";
import Why from "../organisms/medical/Why";
import Footer from "../molecules/Footer";
import Appointment from "../organisms/medical/appointment/Appointment";

const Medical = () => {
  return (
    <div>
      <HeaderM />
      <WWH />
      <What />
      <Why />
      <Footer />
    </div>
  );
};

export default Medical;
