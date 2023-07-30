import React, {useEffect, useRef, useState} from "react";
import Input from "../../atom/Input";
import Image from "../../atom/Image";
import cuate from '../../../images/cuate2.png'
import Text from "../../atom/Text";
import Footer from "../../molecules/Footer";

const Ilcontact = () => {
  const spinRef= useRef()

  const [errMsg, setErrMsg] = useState()
  const [details, setDetails] = useState({
      name: "",
      email: "",
      phone_number: "",
      state: "",
      country: "",
      address: "",
      additional_info:""
  })

  const handleForm =(e)=>{
    setDetails((prevData)=>{
      return {...prevData, [e.target.name]: e.target.value}
      
    })
  }

  const submitForm =(e)=>{
    e.preventDefault()
    spinRef.current.style.display="block"

    fetch("https://zlglobalalliance.com/api/send-admin-email",{
      method:"POST",
      body:JSON.stringify(details),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response=>response.json())
    .then(result=>{
      console.log(result)
      setErrMsg(result.message)
      spinRef.current.style.display="none"
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(()=>{
    // window.addEventListener("load", function() {
      const action="https://script.google.com/macros/s/AKfycbyE3XhJvE7ZqIClxWWLHE_Cixm5T9NR9i6tAdqjB6GU9AGTixgaOXV7DG1cMD4kWDis/exec"
      const form = document.querySelector('#my-form3');
      const but = document.querySelector('.subb');
      
      but.addEventListener("click", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        fetch(action, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          // mess.style.display="block"
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

      <form id="my-form3"  className="formapp d-flex flex-column gap-3 bg-white p-4">
        <Text className="colordark fw-bolder fs-4" children="Kindly fill out this form"/>
        <Input
          type="text"
          name="name"
          placeholder="Full Name*"
          className="w-100 formin2 form-control"
          value={details.name}
          onChange={handleForm}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email*"
          className="w-100 formin2 form-control"
          value={details.email}
          onChange={handleForm}
          required
        />
        <Input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          className="w-100 formin2 form-control"
          value={details.phone_number}
          onChange={handleForm}
        />
        <div className="row gap-4">

        <Input
          type="text"
          name="state"
          placeholder="State"
          className="col formin2 form-control"
          value={details.state}
          onChange={handleForm}
          />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          className="col formin2  form-control"
          value={details.country}
          onChange={handleForm}
          />
          </div>
          <Input
          type="text"
          name="address"
          placeholder="Address"
          className="w-100 formin2 form-control"
          value={details.address}
          onChange={handleForm}
        />
        <textarea
          rows="7"
          name="additional_info"
          placeholder="Additional Notes"
          className="w-100 formin2 form-control"
          value={details.additional_info}
          onChange={handleForm}
        ></textarea>
          {errMsg &&<span className="mess text-center fs-4 fw-bold colorgreen bg-light rounded-3 p-3">{errMsg}</span>}
            <button type="submit" className="subb btn d-flex align-items-center justify-content-center " onClick={submitForm}> <div
              className="spinner-border spinner-border-sm me-2 text-warning"
              id="spin"
              role="status"
              ref={spinRef}
            >
              <span className="sr-only"></span>
            </div>Submit</button> 
          
      </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Ilcontact;
