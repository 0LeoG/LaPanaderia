import React, { Component } from "react";

export class EditBread extends React.Component {
  state = {
    breadId: 0,
    name: "",
    price: 0
  };

  handleNameChange = event => {
    const target = event.target;
    this.setState({ name: target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>{this.state.name}</label>
            <input
              type="text"
              value={this.state.name}
              className="form-control"
              id="name"
              onChange={this.handleNameChange}
            />

            <input
              type="number"
              value={this.state.price}
              className="form-control"
              id="price"
              onChange={this.handlePriceChange}
            />
          </div>
        </form>
        {this.state.breadId}
      </div>
    );
  }
}
