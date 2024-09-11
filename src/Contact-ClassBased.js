import React from "react";
import SecondChild from "./SecondChild";

import UserContext from "./utils/user-context";

export class ContactClassBased extends React.Component {
  namer = "e";
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
        //TODO: need to check how it works Contact Us ( Class Based):
        <UserContext.Consumer>
          {(data) => {
            console.log(data.loggedInUser);
            this.namer = data.loggedInUser;
          }}
        </UserContext.Consumer>
        ;
        <br />
        Name: {this.props.name} {this.namer}
        <br />
        <SecondChild parent={this.props.name} name="Inception"></SecondChild>
        <h2>Phone: {this.state.phone}</h2>
      </div>
    );
  }
}

export default ContactClassBased;
