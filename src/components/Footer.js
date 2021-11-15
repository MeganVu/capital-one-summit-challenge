import React, { PureComponent } from "react";
import "bulma/css/bulma.min.css";

// footer
export class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <p>made with uwu &#10084; by Megan Vu</p>
        <p>powered by the National Park Service API</p>
      </div>
    );
  }
}

export default Footer;
