import React from "react";
import PropTypes from "prop-types";

import './style.css';

class Hamburger extends React.PureComponent {
  render() {
    const { active, loading } = this.props;

    return (
      <div style={{position: "relative", top: "10px", left: "-5px"}}>
        <div
          className={`hamburger-top ${active ? "active" : ""} ${
            loading ? "loading" : ""
          }`}
          />
        <div
          className={`hamburger-center ${active ? "active" : ""}  ${
            loading ? "loading" : ""
          }`}
          />
        <div
          className={`hamburger-bottom ${active ? "active" : ""}  ${
            loading ? "loading" : ""
          }`}
        />
      </div>
    );
  }
}

Hamburger.propTypes = {
  active: PropTypes.bool,
  loading: PropTypes.bool
};

Hamburger.defaultProps = {
  active: false,
  loading: false
};

export default Hamburger;