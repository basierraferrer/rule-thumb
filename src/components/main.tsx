import React from "react";
import Close from "./close";
import Menu from "./menu";
import { mainCard } from "../data.json";
import Thumb from "./common/thumbs";

const Main = () => {
  return (
    <section className="main">
      <Menu />
      <Card
        namePerson={mainCard.namePerson}
        description={mainCard.description}
      />
      <Close />
    </section>
  );
};

const Card = (props: MainCard) => (
  <div className="d-flex flex-column col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 offset-md-1 offset-lg-1 offset-xl-1 offset-xxl-1 main-card">
    <div className="d-flex flex-column p-2 card-title">
      <div>What's your opinion on</div>
      <h1 className="">{`${props.namePerson} ?`}</h1>
    </div>
    <div className="p-2 main-card-body">
      <p className="description">{props.description}</p>
      <p className="more-info">
        <a href="/">
          <span className="rot rot-wikipedia mr-1" />
          <span className="text-underline">More information</span>
        </a>
      </p>
      <p>
        <h4>What's your veredict?</h4>
      </p>
    </div>
    <div className="d-flex flex-row card-bottom">
      <Thumb
        className="card-bottom-btn"
        thumbOrientation="up"
        opacity
        onClick={() => alert("Up")}
      />
      <Thumb
        className="card-bottom-btn"
        thumbOrientation="down"
        opacity
        onClick={() => alert("Down")}
      />
    </div>
  </div>
);

interface MainCard {
  namePerson: string;
  description: string;
}

export default Main;
