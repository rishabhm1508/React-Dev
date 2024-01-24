import React from "react";
import SecondChild from "./SecondChild";

export class ContactClassBased extends React.Component {
  constructor(props) {
    //Why using super ??
    super(props);

    // Setting the initial state.
    this.state = {
      phone: 999393384,
      count1: 999393384,
    };
  }

  render() {
    return (
      <div>
        Contact Us ( Class Based):
        <br />
        Name: {this.props.name}
        <br />
        <SecondChild parent={this.props.name} name="Inception"></SecondChild>
        <h2>Phone: {this.state.phone}</h2>
      </div>
    );
  }
}

export default ContactClassBased;
