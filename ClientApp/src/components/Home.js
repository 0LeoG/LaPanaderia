import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";
import "./Home.css";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
      <div>
        <div className="card-container">
          <div className="flex-item">
            <NewsHeaderCard
              title="Add order"
              href="./AddOrder"
              thumbnail={require("../Images/addCircle.svg")}
            />
          </div>
          <div className="flex-item">
            <NewsHeaderCard
              title="View order history"
              href="https://github.com/nekonee"
              thumbnail={require("../Images/La.Panaderia.jpg")}
            />
          </div>
          <div className="flex-item">
            <NewsHeaderCard
              title="Recipes"
              href="https://github.com/nekonee"
              thumbnail={require("../Images/La.Panaderia.jpg")}
            />
          </div>
        </div>
      </div>
    );
  }
}
