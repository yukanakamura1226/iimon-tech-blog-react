/* eslint-disable react/prop-types */
import React from "react";



function Advertisement({ formData }) {
  return (
    <div className="advertisement">
      <h2>Advertisement</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default Advertisement;
