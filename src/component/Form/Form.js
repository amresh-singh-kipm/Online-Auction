import React, { useState } from "react";

function Form({ field, handleChange }) {
  const [formField, setFormField] = useState(field);

  return (
    <>
      {formField?.map((field, id) => {
        return (
          <div className="form-group mt-3" key={id}>
            <label>{field.fieldName}</label>
            <input
              type={field.type ?? "text"}
              name={field.name}
              className="form-control mt-2"
              placeholder={field.placeholder}
              onChange={(e) => handleChange(e)}
            />
          </div>
        );
      })}
    </>
  );
}

export default Form;
