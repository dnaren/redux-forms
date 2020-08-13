import React from "react";
import { connect } from "react-redux";
import { getFormSyncWarnings, submit } from "redux-form";
import FieldLevelValidationForm from "./FieldLevelValidationForm";
import showResults from "./showResults";

class FormContainer extends React.PureComponent {
  //const { initialValues, anyWarnings, doSubmit } = props;
  // const { doSubmit } = props;
  // const initialValues = { username: "james bond" };
  //const isDisabled = anyWarnings && Object.keys(anyWarnings).length > 0;

  // getInitialValues() {
  //   return {};
  // }

  get initialValues() {
    const values = Object.assign({}, this.props.inputData);
    return values;
  }

  render() {
    const disableSubmit =
      this.props.anyWarnings && Object.keys(this.props.anyWarnings).length > 0;

    return (
      <div>
        <FieldLevelValidationForm
          initialValues={this.initialValues}
          onSubmit={showResults}
        />
        <div>
          <button
            type="submit"
            disabled={disableSubmit}
            onClick={this.props.doSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

FormContainer = connect(
  (state) => ({
    inputData: { username: "james bond" },
    anyWarnings: getFormSyncWarnings("fieldLevelValidation")(state)
  }),
  (dispatch) => ({
    doSubmit: () => dispatch(submit("fieldLevelValidation"))
  })
)(FormContainer);

export default FormContainer;
