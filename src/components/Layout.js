import React, { PureComponent } from "react";
import Navbar from "components/Navbar";

class Layout extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="layout">
        <Navbar navigationData={this.props.children.props.navigation} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
