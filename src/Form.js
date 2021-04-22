import React from "react";

export default function Form(props){

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit(evt);
      };

      const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      }

    return(
    <form className="form container" onSubmit={onSubmit}>
        <div className="form-group submit">
            <h2>Add a List</h2>
            <button disabled={disabled}>submit</button>
            {/* //ERRORS */}
            <div className="errors">
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms_of_service}</div>
            </div>
        </div>
        

        <div className="form-group inputs">
        <h4>General information</h4>
        {/* ////////// TEXT INPUTS ////////// */}

        <label>
        Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>

        <label>
        Terms_of_Service
          <input
            type="checkbox"
            name="terms_of_service"
            checked={values.terms_of_service}
            onChange={onChange}
          />
        </label>

        </div>

    </form>
    )
    
}