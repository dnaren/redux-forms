import React from "react";
//import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import ReactJson from "react-json-view";

const required = (value) => (value ? undefined : "Required");

const renderField = ({
  input,
  label,
  type,
  meta,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
    <ReactJson src={meta} />
  </div>
);

let FieldLevelValidationForm = (props) => {
  //const { handleSubmit, pristine, reset, submitting } = props;
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        warn={required}
      />
      {/* <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div> */}
    </form>
  );
};

FieldLevelValidationForm = reduxForm({
  form: "fieldLevelValidation" // a unique identifier for this form
})(FieldLevelValidationForm);

// FieldLevelValidationForm = connect((state) => ({
//   initialValues: { username: "naren" } // pull initial values from account reducer
// }))(FieldLevelValidationForm);

export default FieldLevelValidationForm;
