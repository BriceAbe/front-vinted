import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import PageOffer from "../components/PageOffer";
import Loader from "react-loader-spinner";
import "../App.css";

function Offer() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
    );
    setdata(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="App">
      <div className="container-loader">
        <Loader
          className="loader-perso"
          type="Oval"
          color="#00BFFF"
          height={500}
          width={500}
          timeout={3000} //3 secs
        />
      </div>
    </div>
  ) : (
    <div className="App">
      <PageOffer data={data} />
    </div>
  );
}

export default Offer;
