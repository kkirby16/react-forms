import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: [],
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    let dataArray = this.state.submittedData.concat(formData);
    this.setState({ submittedData: dataArray });
  };

  listOfSubmissions = () => {
    return this.state.submittedData.map((data) => {
      return (
        <div>
          <span>{data.firstName}</span> <span>{data.lastName}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleFirstNameChange(event)}
            name="firstName"
            value={this.state.firstName}
          />
          <input
            type="text"
            onChange={(event) => this.handleLastNameChange(event)}
            name="lastName"
            value={this.state.lastName}
          />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
        {console.log("submittedData", this.state.submittedData)}
      </div>
    );
  }
}

export default Form;
