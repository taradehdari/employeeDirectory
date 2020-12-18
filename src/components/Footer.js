import React, { Component } from "react";
import "../styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Made with <span>❤</span> by{" "}
        <a href="https://github.com/taradehdari" target="_blank">
          Tara Dehdari
        </a>
      </div>
    );
  }
}
