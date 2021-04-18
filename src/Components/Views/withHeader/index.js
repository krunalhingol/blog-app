import React from "react";
import Header from "../../Header";

const withHeader = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          <div className="container">
            <WrappedComponent />
          </div>
        </>
      );
    }
  };
};

export default withHeader;
