import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <Loader
        type="threeDots"
        color="blue"
        height={70}
        width={100}
        timeout={4000}
      />
    );
  }
}
