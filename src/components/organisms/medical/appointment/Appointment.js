import React, {useEffect} from "react";
import Input from "../../../atom/Input";
import Button from "../../../atom/Button";
import Image from "../../../atom/Image";
import cuate from '../../../../images/cuate2.png'
import Text from "../../../atom/Text";

const Appointment = () => {
  useEffect(()=>{

    // window.addEventListener("load", function() {
      const form = document.getElementById('my-form2');
      const mess = document.querySelector('.mess');
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        const appoint= e.target.action
        const data = new FormData(form);
        fetch(appoint, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          mess.style.display="block"
          mess.innerHTML="Appointment Booked!"
        })
      });
    // });
  },[])
  return (
    <div className="p-3 p-lg-5 appoint">
        <Text className="colordark text-center appoint-head" children="Schedue a Visit"/>
      <div className="row gap-5 gap-lg-0">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 pe-lg-5">
          <Image src={cuate} className="appoint-img"/>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 ps-lg-5">

      <form action="https://script.google.com/macros/s/AKfycbzPDq_IdEXRFOf4rkug-yE1Lv-7-5d9y0tJJT0InSMqA8wAqf6AZP559qV3x7kYb50AWg/exec" method="post" id="my-form2" className="formapp d-flex flex-column gap-3 bg-white p-4">
        <Text className="colordark fw-bolder fs-4" children="Kindly fill out this form"/>
        <Input
          type="text"
          name="Fullname"
          placeholder="Fullname*"
          className="w-100 formin2 form-control"
          required
        />
        <Input
          type="email"
          name="Email"
          placeholder="Email*"
          className="w-100 formin2 form-control"
          required
        />
        <Input
          type="text"
          name="Phone_number"
          placeholder="Phone Number"
          className="w-100 formin2 form-control"
        />
        <div className="row gap-4">

        <Input
          type="date"
          name="Day"
          placeholder="Day"
          className="col formin2 form-control"
          />
        <Input
          type="time"
          name="Time"
          placeholder="Time"
          min="09:00"
          max="18:00"
          className="col formin2  form-control"
          />
          </div>
        <textarea
          rows="7"
          name="Notes"
          placeholder="Additional Notes"
          className="w-100 formin2 form-control"
        ></textarea>
          <p className="mess m-auto text-center fs-4 fw-bold colorgreen bg-light rounded-3 p-3"></p>
        
            <Button type="submit" children="Submit" className="subb btn " />
          
      </form>
      </div>
      </div>
    </div>
  );
};

export default Appointment;
