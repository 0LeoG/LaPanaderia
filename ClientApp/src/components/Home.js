import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";
import "./Home.css";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
      <div>
        <div className="card-container">
          <NewsHeaderCard
            title="Add order"
            href="./Counter"
            thumbnail={require("../Images/addCircle.svg")}
          />
          <NewsHeaderCard
            title="View order history"
            href="https://github.com/nekonee"
            thumbnail={require("../Images/La.Panaderia.jpg")}
          />
        </div>

        <div className="card-container">
          <NewsHeaderCard
            title="Recipes"
            href="https://github.com/nekonee"
            thumbnail={require("../Images/La.Panaderia.jpg")}
          />
        </div>
      </div>
    );
  }
}
