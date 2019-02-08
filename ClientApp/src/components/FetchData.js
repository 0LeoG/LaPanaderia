import React, { Component } from "react";
import { NewsHeaderCard } from "react-ui-cards";
import "./Home.css";

export class FetchData extends Component {
  displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { breads: [], loading: true };

    fetch("api/SampleData/GetBread")
      .then(response => response.json())
      .then(data => {
        this.setState({ breads: data, loading: false });
      });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.breads.map((bread) => (
            <NewsHeaderCard
              title={bread.name}
              href="./EditBread"
              thumbnail={require("../Images/" + bread.trimmedName + ".jpg")}
            />
        ))}
      </div>
    );
  }
}
