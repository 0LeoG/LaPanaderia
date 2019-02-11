import React, { Component } from "react";
import "./AddOrder.css";
import Select from "react-select";

export class AddOrder extends Component {
  displayName = AddOrder.name;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      breads: [],
      amount: 0,
      orderBreads: [{ name: "", quantity: 0, breadId:0 }]
    };

    fetch("api/SampleData/GetBread")
      .then(response => response.json())
      .then(data => {
        this.setState({
          breads: data
        });
      });
  }

  handleBreadSelectChange = idx => event => {
    const newBread = this.state.orderBreads.map((bread, sidx) => {
      if (idx !== sidx) return bread;
      return { ...bread, name: event.label, breadId: event.value };
    });

    this.setState({ orderBreads: newBread });
  };

  handleQuantityChange = idx => event => {
    const newBread = this.state.orderBreads.map((bread, sidx) => {
      if (idx !== sidx) return bread;
      return { ...bread, quantity: event.target.value };
    });

    this.setState({ orderBreads: newBread });
  };

  handleAmountChange = event => {
    const target = event.target;

    this.setState({ amount: target.value });
  };

  handleNameChange = event => {
    const target = event.target;

    this.setState({ name: target.value });
  };

  handleSubmit = event => {
    fetch("api/SampleData/SubmitOrder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };

  handleBreadButton = event => {
    this.setState({
      orderBreads: this.state.orderBreads.concat([{ name: "", quantity: 0 }])
    });
  };

  render() {
    return (
      <div className="addOrder">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1>Add new order</h1>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                value={this.state.name}
                className="form-control"
                id="name"
                onChange={this.handleNameChange}
              />
            </label>
            
            <br />
            <br />


            <div className="breadLabelGroup">
              <label htmlFor="breadSelect">Bread Type</label>
              <label htmlFor="quantity">Quantity</label>
            </div>
            
            {this.state.orderBreads.map((orderedBread, idx) => (
              <div className="breadGroup">
                <div className="breadSelect">
                  <Select
                    value={orderedBread.Name}
                    onChange={this.handleBreadSelectChange(idx)}
                    options={this.state.breads}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="100"
                    value={orderedBread.quantity}
                    onChange={this.handleQuantityChange(idx)}
                    id="quantity"
                    className="form-control"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={this.handleBreadButton}
              className="btn btn-primary"
            >
              Add bread
            </button>


            <br />
            <br />

            <label htmlFor="amount">
              Amount:
              <input
                type="number"
                value={this.state.amount}
                placeholder="0.00"
                className="form-control"
                id="amount"
                onChange={this.handleAmountChange}
              />
            </label>
            <input type="submit" value="Submit order" />
          </div>
        </form>
      </div>
    );
  }
}
