import React, { Component } from "react";

export class AddOrder extends Component {
  displayName = AddOrder.name;

  constructor(props) {
    super(props);
    this.state = { name: "", bread: "", quantity: "", amount: "" };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  // hadleChange(event){
  //   this.setState({})
  // }

  handleSubmit(event) {

    alert("Order was saved successfully", +this.state.bread);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1>Add new order</h1>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={this.state.name}
              className="form-control"
              id="name"
            />

            <label htmlFor="bread">Bread: </label>
            <input
              type="text"
              value={this.state.bread}
              className="form-control"
              id="bread"
            />

            <label htmlFor="quantity">Quantity: </label>
            <input
              type="text"
              value={this.state.quantity}
              className="form-control"
              id="quantity"
            />

            <label htmlFor="amount">Amount: </label>
            <input
              type="text"
              value={this.state.amount}
              className="form-control"
              id="amount"
            />

            <input type="submit" value="Submit order" />
          </div>
        </form>
      </div>
    );
  }
}
