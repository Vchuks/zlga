import React from "react";

import EnvList from "./EnvList";
import EnvCard from "./EnvCard";
import { Element } from "react-scroll";

const Envpage = () => {

  const envlist = EnvList.map((listenv)=> <EnvCard key={listenv.id} id={listenv.id} pic={listenv.pic} text1={listenv.text1} text2={listenv.text2} text3={listenv.text3} />)
    return (
      <div className="py-5">
      <Element id="envpage" name="envpage">
      {envlist}
      </Element>
    </div>
  );
};

export default Envpage;
