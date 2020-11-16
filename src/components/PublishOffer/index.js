import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import Cookie from "js-cookie";

const PublishOffer = () => {
  const [image, setImage] = useState({});
  const [titre, settitre] = useState();
  const [description, setdescription] = useState();
  const [marque, setmarque] = useState();
  const [taille, settaille] = useState();
  const [couleur, setcouleur] = useState();
  const [etat, setetat] = useState();
  const [lieu, setlieu] = useState();
  const [price, setprice] = useState();

  const formData = new FormData();
  formData.append("title", titre);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("condition", etat);
  formData.append("city", lieu);
  formData.append("brand", marque);
  formData.append("size", taille);
  formData.append("color", couleur);
  formData.append("picture", image);

  const handleSubmit = async (e) => {
    const token = Cookie.get("token");
    e.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <div className="PublishOffer-container-all">
      <div className="PublishOffer-contenu">
        <h2>Vends ton article</h2>

        <form className="publish-form" onSubmit={handleSubmit}>
          <div className="publish-offer-file">
            <div className="publish-offer-file-cadre">
              <label className="label-file">Choisir une image</label>
              <input
                className="input-file"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>

          <div className="publish-offer-sectionTitle">
            <div className="publish-title">
              <h4 className="publish-h4">Titre</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: Chemise Sézane verte"
                value={titre}
                onChange={(e) => settitre(e.target.value)}
              />
            </div>
            <div className="publish-desc">
              <h4 className="publish-h4">Décris ton article</h4>
              <textarea
                className="publish-input-textarea"
                type="textarea"
                placeholder="ex: porté plusieurs fois"
                rows="5"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
          </div>

          <div className="publish-offer-sectionDescription">
            <div className="publish-title">
              <h4 className="publish-h4">Marque</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: Zara"
                value={marque}
                onChange={(e) => setmarque(e.target.value)}
              />
            </div>
            <div className="publish-title">
              <h4 className="publish-h4">Taille</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: L / 40 / 12"
                value={taille}
                onChange={(e) => settaille(e.target.value)}
              />
            </div>
            <div className="publish-title">
              <h4 className="publish-h4">Couleur</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: Fushia"
                value={couleur}
                onChange={(e) => setcouleur(e.target.value)}
              />
            </div>
            <div className="publish-title">
              <h4 className="publish-h4">Etat</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: Neuf avec étiquette"
                value={etat}
                onChange={(e) => setetat(e.target.value)}
              />
            </div>
            <div className="publish-title">
              <h4 className="publish-h4">Lieu</h4>
              <input
                className="publish-input"
                type="text"
                placeholder="ex: Paris"
                value={lieu}
                onChange={(e) => setlieu(e.target.value)}
              />
            </div>
          </div>
          <div className="publish-offer-sectionPrice">
            <h4 className="publish-h4">Prix</h4>
            <input
              className="publish-input"
              type="text"
              placeholder="0,00 €"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className="publish-offer-sectionButton">
            <button className="publish-offer-button" type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishOffer;
