import React from "react";
import EachSchool from "../organisms/school/EachSchool";
import Footer from "../molecules/Footer";
import coast from "../../brochure/Department of Coastal Marine Tech Bronchure.pdf"

const CoastDept = () => {
  return (
    <div className="d-flex h flex-column justify-content-between">
      <EachSchool
        head2="Coastal/Marine Geography & Ecology Technology"
        text="Understand the effect of coastal/marine geography on ecology."
      Pdf={coast}/>
      <Footer />
    </div>
  );
};

export default CoastDept;
