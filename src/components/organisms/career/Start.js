import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import st1 from "../../../images/vscode-icons_file-type-nsri-integrity.png"
import st2 from "../../../images/v.png"
import st3 from "../../../images/flat-color-icons_idea.png"
import st4 from "../../../images/icon-park-outline_master.png"

const Start = () => {
  return (
    <div className="start p-3 p-lg-5">
      <Text
        className="colordark fs-2 text-center start-head"
        children="Start a Career with Us"
      />
      <Text
        className="colorlight start-text text-center"
        children="At ZLGA, we don't only perform our duties; we also create them. Discover your passion, express your creativity, and join one of the most interesting businesses on the continent by working with ZLGA."
      />
      <div className="row gap-3 justify-content-between py-5">
        <div className="col-sm-12 col-md-12 col-lg-3 start-pic1 text-center px-4 px-lg-5 py-4">
          <div>
            <Image className="sticon" src={st1} />
          </div>
          <Text className="start1H colordark fs-5 pt-2" children="Integrity" />
          <Text className="text-white" children="Being a dependable and moral business partner is essential for long-term success. We do not take it for granted." />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 start-pic2 text-center px-4 px-lg-5  py-4">
          <div>
            <Image className="sticon" src={st2} />
          </div>
          <Text className="start2H text-white fs-5 pt-2" children="Teamwork" />
          <Text className="text-white" children="We can only achieve the breakthroughs that shape our careers via excellent teamwork.
 There is strength in unity." />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 start-pic3 text-center px-4 px-lg-5  py-4">
          <div>
            <Image className="sticon" src={st3} />
          </div>
          <Text className="start3H fs-5 pt-2" children="Innovation" />
          <Text className="colordark" children="Positive change is needed in the globe. We need fresh approaches. Progress is required. Likewise, you." />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 start-pic4 text-center px-4 px-lg-5  py-4">
          <div>
            <Image className="sticon" src={st4} />
          </div>
          <Text className="start4H text-white fs-5 pt-2" children="Professionalism" />
          <Text className="text-white" children="Are you lacking the drive necessary to advance your career? You'll find all the inspiration you need to act professionally here." />
        </div>
      </div>
    </div>
  );
};

export default Start;
