import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.css";

export class NavMenu extends Component {
  displayName = NavMenu.name;

  render() {
    return (
      <Navbar  fluid>
          <Navbar.Brand>
            <img src={require("../Images/La.Panaderia.jpg")} />
          </Navbar.Brand>
          <Nav>
            <LinkContainer to={"/"} exact>
              <NavItem>
                <Glyphicon glyph="home" /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={"/AddOrder"}>
              <NavItem>
                <Glyphicon glyph="plus" /> Add Order
              </NavItem>
            </LinkContainer>
            <LinkContainer to={"/fetchdata"}>
              <NavItem>
                <Glyphicon glyph="pencil" /> Product Information
              </NavItem>
            </LinkContainer>
          </Nav>
      </Navbar>
    );
  }
}
