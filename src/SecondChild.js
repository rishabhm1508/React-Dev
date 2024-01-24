import React from "react";

export class SecondChild extends React.Component {
  constructor(props) {
    //Why using super ??
    super(props);

    // Setting the initial state.
    this.state = {
      phone: 999393384,
      count1: 999393384,
    };
    console.log(
      "Contact Us ( Class Based): contructor:" +
        this.props.name +
        "Child  of" +
        this.props.parent
    );
  }

  componentDidMount() {
    console.log(
      "Contact Us ( Class Based): mount:" +
        this.props.name +
        "Child  of" +
        this.props.parent
    );
  }

  render() {
    console.log(
      "Contact Us ( Class Based): render:" +
        this.props.name +
        "Child  of" +
        this.props.parent
    );
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

export default SecondChild;
