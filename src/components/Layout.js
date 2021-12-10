import React, { PureComponent } from "react";
import Navbar from "./Navbar";
class Layout extends PureComponent {
  render() {
    return (
      <div className="layout">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
