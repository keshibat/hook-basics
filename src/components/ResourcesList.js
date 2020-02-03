import React, { Component } from "react";

class ResourcesList extends Component {
  state = { resources: [] };

  async componentDidMount() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    )
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });

    this.setState = { resources: response };
    console.log(response.length);
  };

  render() {
     console.log(this.state.resources.length);
    return <div>{this.state.resources.length}</div>;
  }
}
export default ResourcesList;



