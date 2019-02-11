import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavMenu } from "./NavMenu";
import "./Layout.css";

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return (
      <div className="container">
        <NavMenu />
        <div className="flexLayoutContainer row">
          <div className="col-md-1" />
          <div className="page-wrapper col-md-10">
            <div>{this.props.children}</div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}
