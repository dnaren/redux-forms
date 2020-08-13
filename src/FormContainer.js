import React from "react";
import { connect } from "react-redux";
import { getFormSyncWarnings, submit } from "redux-form";
import FieldLevelValidationForm from "./FieldLevelValidationForm";
import showResults from "./showResults";

let FormContainer = (props) => {
  //const { initialValues, anyWarnings, doSubmit } = props;
  const { doSubmit } = props;
  const initialValues = { username: "james bond" };
  //const isDisabled = anyWarnings && Object.keys(anyWarnings).length > 0;
  return (
    <div>
      <FieldLevelValidationForm
        initialValues={initialValues}
        onSubmit={showResults}
      />
      <div>
        <button type="submit" onClick={doSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

FormContainer = connect(
  (state) => ({
    //initialValues: { username: "james bond" }
    //anyWarnings: getFormSyncWarnings("fieldLevelValidation")(state)
  }),
  (dispatch) => ({
    doSubmit: () => dispatch(submit("fieldLevelValidation"))
  })
)(FormContainer);

export default FormContainer;
