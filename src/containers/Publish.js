import React from "react";
import PublishOffer from "../components/PublishOffer";

const Publish = ({ token, setisPageHome }) => {
  setisPageHome(false);
  return <PublishOffer />;
};

export default Publish;
