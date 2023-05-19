import React from "react";
import Text from "../../atom/Text";
import Button from "../../atom/Button";
import TextLinks from "../../atom/TextLinks";

const EachSchool = ({head2 , text, Pdf}) => {
  return (
    <div className="p-3 p-lg-5">
      <Text className="colordark eachsch-head text-center" children="Department of" />
      <Text className="colorgreen eachsch-head2 text-center" children={head2} />
      <Text className="colorlight eachsch-text text-center" children={text} />
      <div className="d-flex flex-column flex-md-row justify-content-center gap-2 pt-5">
        <TextLinks
          to="https://api.whatsapp.com/send?phone=2348064552898"
          className=""
          children={<Button className="btn btn-broch2" children="Apply Now" />}
        />
        <Button className="btn btn-broch" children="Download Brochure" onClick={()=> window.open(Pdf)} />
      </div>
    </div>
  );
};

export default EachSchool;
