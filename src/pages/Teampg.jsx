import React from "react";
import "../css/App.css";
import Card from "../components/Card";
import data from "../dataTeam.json";

const Teampg = () => {
  return (
    <section>
      <section className="heading">
        <h1>Our Web Team</h1>
      </section>
      <div class="main">
        {data.map((elements) => {
          return (
            <Card
              name={elements.name}
              role={elements.role}
              imgUrl={elements.imgUrl}/>
          );
        })}
      </div>
    </section>
  );
};

export default Teampg;
