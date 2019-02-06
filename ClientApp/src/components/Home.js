import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";
import "./Home.css";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
      <div className="card-container">
        <NewsHeaderCard
          title="Add order"
          href="https://github.com/nekonee"
          thumbnail={require("../Images/addCircle.svg")}
        />
        <NewsHeaderCard
          title="View order history"
          href="https://github.com/nekonee"
          thumbnail={require("../Images/La.Panaderia.jpg")}
        />
        <NewsHeaderCard
          title="Recipes"
          href="https://github.com/nekonee"
          thumbnail={require("../Images/La.Panaderia.jpg")}
        />
      </div>
    );
  }
}
