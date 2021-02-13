import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group col-auto">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export function SubmitBtn(props) {
  return (
    <button
      {...props}
      style={{ background: "#2196f3", float: "right", marginBottom: 10 }}
      className="btn submitBtn mb-3"
    >
      Search
    </button>
  );
}
