import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  inverted,
  isGoogleSignin,
  children,
  ...otherProps
}) => (
  <div className="button-container">
    <button
      className={`${inverted ? "inverted " : ""}${
        isGoogleSignin ? "google-sign-in " : ""
      }custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default CustomButton;
