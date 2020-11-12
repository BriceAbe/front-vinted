import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Bandeau from "../components/Bandeau";
import Card from "../components/Card";

function Home() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setdata(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span> ""En chargement..."" </span>
  ) : (
    <>
      <Bandeau />
      <div className="App">
        <div className="cards-container">
          <div className="cards-direction">
            {data.offers.map((elem, i) => {
              return <Card key={i} data={elem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
