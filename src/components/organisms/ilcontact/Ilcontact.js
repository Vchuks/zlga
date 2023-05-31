import React, {useEffect} from "react";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import Image from "../../atom/Image";
import cuate from '../../../images/cuate2.png'
import Text from "../../atom/Text";
import Footer from "../../molecules/Footer";

const Ilcontact = () => {
  useEffect(()=>{

    // window.addEventListener("load", function() {
      const form = document.getElementById('my-form3');
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
          mess.innerHTML="Recieved!"
        })
      });
    // });
  },[])
  return (
    <div className="p-3 p-lg-5 appoint">
        <Text className="colordark text-center appoint-head" children="Tell us the situation in your area"/>
      <div className="row gap-5 gap-lg-0 pb-lg-5">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 pe-lg-5">
          <Image src={cuate} className="appoint-img"/>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 ps-lg-5">

      <form action="https://script.google.com/macros/s/AKfycbyE3XhJvE7ZqIClxWWLHE_Cixm5T9NR9i6tAdqjB6GU9AGTixgaOXV7DG1cMD4kWDis/exec" method="post" id="my-form3" className="formapp d-flex flex-column gap-3 bg-white p-4">
        <Text className="colordark fw-bolder fs-4" children="Kindly fill out this form"/>
        <Input
          type="text"
          name="Full_name"
          placeholder="Full Name*"
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
          name="Phone_Number"
          placeholder="Phone Number"
          className="w-100 formin2 form-control"
        />
        <div className="row gap-4">

        <Input
          type="text"
          name="State"
          placeholder="State"
          className="col formin2 form-control"
          />
        <Input
          type="text"
          name="Country"
          placeholder="Country"
          className="col formin2  form-control"
          />
          </div>
          <Input
          type="text"
          name="Address"
          placeholder="Address"
          className="w-100 formin2 form-control"
        />
        <textarea
          rows="7"
          name="AddNotes"
          placeholder="Additional Notes"
          className="w-100 formin2 form-control"
        ></textarea>
          <p className="mess m-auto text-center fs-4 fw-bold colorgreen bg-light rounded-3 p-3"></p>
        
            <Button type="submit" children="Submit" className="subb btn " />
          
      </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Ilcontact;
