import React from "react";

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
        <button
          onClick={() => {
            // modifying state using set state method. Only phone is modified, and complete component
            // is re-rendered after React checks for diffs in reconciliation cycle.
            this.setState({
              phone: this.state.phone + 1,
            });
          }}
        >
          Next number
        </button>
        <h2>Phone: {this.state.phone}</h2>
      </div>
    );
  }
}

export default ContactClassBased;
