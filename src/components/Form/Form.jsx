/* eslint-disable react/prop-types */
import React from "react";

function Form({ register, formData }) {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register("email")} />
      </div>
      {/* 他のフォームフィールドを追加することができます */}
    </form>
  );
}

export default Form;
