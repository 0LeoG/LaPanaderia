import React, { Component } from "react";
export class AddOrder extends Component {
  displayName = AddOrder.name;

  constructor(props) {
    super(props);
    this.state = { name: "", breads: [{name:"", quantity: 0}], amount: 0 };
  }

  handleBreadChange = idx => event => {
    const newBread = this.state.breads.map((bread, sidx) =>{
      if(idx !== sidx) return bread;
      return{ ...bread, name:event.target.value};
    })

    this.setState({breads: newBread});
  };

  handleQuantityChange = idx => event => {
    const newBread = this.state.breads.map((bread, sidx) => {
      if (idx !== sidx) return bread;
      return { ...bread, quantity: event.target.value };
    })

    this.setState({ breads: newBread });
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
    console.log(JSON.stringify(this.state));
    fetch('api/SampleData/SubmitOrder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':  'application/json'
      },
      body: JSON.stringify(this.state)
    })
    alert("Order was saved successfully" + this.state.bread);
  };

  handleBreadButton = event =>{
    this.setState({
      breads: this.state.breads.concat([{name:"", quantity:0}])
    });
  }

  render() {
    return (
      <div>
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

            {this.state.breads.map((bread, idx) => (
              <div className="bread">
                <input
                  type="text"
                  placeholder="Rebanada..."
                  value={bread.name}
                  onChange={this.handleBreadChange(idx)}
                  id="bread"
                  className="form-control"
                />

                <input
                  type="text"
                  placeholder="100"
                  value={bread.quantity}
                  onChange={this.handleQuantityChange(idx)}
                  id="quantity"
                  className="form-control"
                />

              </div>
            ))}


            <button
              type="button"
              onClick={this.handleBreadButton}
              className="btn btn-primary"
            >Add bread</button>

            <br></br>

            <label htmlFor="amount">
              Amount:
              <input
                type="text"
                value={this.state.amount}
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
