import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import PageOffer from "../components/PageOffer";
import "../App.css";

function Offer() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);
  console.log(id);
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
    <span>En chargement..</span>
  ) : (
    <div className="App">
      <Header />
      <PageOffer data={data} />
    </div>
  );
}

export default Offer;
