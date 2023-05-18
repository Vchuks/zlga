import React, { useEffect } from "react";
import Image from "../../atom/Image";
import ctimg from "../../../images/Contact_header_2880x1000px 1.png";
import Text from "../../atom/Text";
import inst from '../../../images/Vector.png'
import face from '../../../images/Vector (1).png'
import linkedin from '../../../images/Vector (2).png'
import twitter from '../../../images/Vector (3).png'
import Input from '../../atom/Input'
import Button from "../../atom/Button";
import TextLinks from "../../atom/TextLinks";

const HeaderCt = () => {
  
  useEffect(()=>{

    // window.addEventListener("load", function() {
      const form = document.getElementById('my-form');
      const mess = document.querySelector('.mess');
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        // https://script.google.com/macros/s/AKfycbzY3SpCKH4ovpwTv2gPHUGB1FTBKwX29TzYtbhJyn1mxU8A0G6SHXkk8kH-MTi4tkiCfA/exec
        fetch(action, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          mess.style.display="block"
          mess.innerHTML="Success!"
        })
      });
    // });
  },[])
  return (
    <div>
      <div className="contact-head d-flex align-items-center justify-content-between ps-3 ps-lg-5">
        <div className="">
          <h1>Contact Us</h1>
        </div>
        <div className="">
          <Image className="ctimg m-0 p-0 " src={ctimg} />
        </div>
      </div>

      <section className="row p-3 p-lg-5 gap-3 gap-lg-0">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 ">
            <div>
                <Text className="colordark ct1 m-0" children="Corporate Office (Nigeria)"/>
                <Text className="colorlight firstct" children="Sunshine Digital Center, Quarter 54 Alagbaka GRA Akure, Ondo State, Nigeria."/>
            </div>
            <div>
                <Text className="colordark ct1 m-0" children="United States of America"/>
                <Text className="colorlight firstct" children="Suite 237 E-Commerce Building 1702 Todds LN, Virginia 23666, USA."/>
            </div>
            <div>
                <Text className="colordark ct1 m-0" children="United Arab Emirates"/>
                <Text className="colorlight firstct" children="Office 64A, 6th Floor Zomorrodah Building, Karama, Dubai."/>
            </div>
            <div>
                <div className="d-flex gap-2">

                <Text className="colordark" children="Email Address:"/>
                <Text className="colorlight" children="zlglobalalliance2016@gmail.com"/>
                </div>
                <div className="d-flex gap-2">

                <Text className="colordark" children="Tel.:"/>
                <Text className="colorlight" children="+234 803 040 0074"/>
                </div>
            </div>
            <div className="d-flex gap-4">
                <TextLinks to="https://instagram.com/zlglobalalliancenig?igshid=NTc4MTIwNjQ2YQ" children={<div><Image className="cticon" src={inst}/></div>} />
                <TextLinks to="https://www.facebook.com/zlglobalallianceng?mibextid=LQQJ4d" children={<div><Image className="cticon" src={face}/></div>} />
                <TextLinks to="" children={<div><Image className="cticon" src={linkedin}/></div>} />
                <TextLinks to="https://twitter.com/zl_global?s=21&t=IYbD17I41t1jbcGrnDZdgg" children={<div><Image className="cticon" src={twitter}/></div>} />
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0">
            <Text className="colordark ct2 m-0" children="Send us a Message"/>
            <Text className="colorlight" children="If there's anything that we can do to help or if you have any questions, please don't hesitate to get in touch. Note:(*) Required fields."/>
            <form action="https://script.google.com/macros/s/AKfycbzY3SpCKH4ovpwTv2gPHUGB1FTBKwX29TzYtbhJyn1mxU8A0G6SHXkk8kH-MTi4tkiCfA/exec" method="post" id="my-form" className="form d-flex flex-column gap-3">
                <Input type="text" name="Fullname" placeholder="Fullname*" className="w-100 formin form-control" required />
                <Input type="text" name="Phone_number" placeholder="Phone Number" className="w-100 formin form-control"  />
                <Input type="email" name="Email" placeholder="Email*" className="w-100 formin form-control" required />
                <textarea rows="7" name="Comment" placeholder="Type your message here" className="w-100 formin form-control"></textarea>
          <p className="mess m-auto text-center fs-4 fw-bold colorgreen bg-light rounded-3 p-3"></p>
                <Button type="submit" children="Submit" className="subb btn "/>
            </form>
        </div>
      </section>
    </div>
  );
};

export default HeaderCt;
