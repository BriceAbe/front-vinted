import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Bandeau from "../components/Bandeau";
import Card from "../components/Card";

function Home({ recherche, setrecherche }) {
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
    <>
      <Bandeau />
      <div className="App">
        <div className="cards-container">
          <div className="cards-direction">
            {data.offers.map((elem, i) => {
              return elem.product_name
                .toLowerCase()
                .includes(recherche.toLowerCase()) ? (
                <Card key={i} data={elem} />
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
