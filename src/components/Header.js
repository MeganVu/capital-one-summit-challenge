import React, { PureComponent } from "react";

// header - contains title of site
export class Header extends PureComponent {
  render() {
    return (
      <div className="header is-size-3">
        <h1>Park Trip Planner!</h1>
      </div>
    );
  }
}

export default Header;
