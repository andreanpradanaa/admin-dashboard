import React from "react";

function ErrorAlter(props) {
  return <span onClick={props.clearError}>{props.errorMessage}</span>;
}

export default ErrorAlter;
