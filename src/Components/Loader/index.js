import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { connect } from "react-redux";
import "./style.scss";

const LoaderComponent = (props) => {
  const { isLoading } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <div class="overlay">
      <div class="overlay__inner">
        <div class="overlay__content">
          <Loader
            type="Bars"
            color="#cecece"
            height={50}
            width={50}
            visible={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.common.isLoading,
});

export default connect(mapStateToProps, null)(LoaderComponent);
