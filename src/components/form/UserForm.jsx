import { useState } from "react";
import { TrialButton } from "../TrialButton";
import { FormField } from "./FormField";

export function UserForm() {
  const [fName, setFName] = useState("");
  const [fNameError, setFNameError] = useState(false);
  const [lName, setLName] = useState("");
  const [lNameError, setLNameError] = useState(false);
  const [mailId, setMailId] = useState("");
  const [mailIdError, setMailIdError] = useState(false);
  const [passKey, setPassKey] = useState("");
  const [passKeyError, setPassKeyError] = useState(false);

  function changeFname(event) {
    setFName(event.target.value);
  }
  function changeLname(event) {
    setLName(event.target.value);
  }
  function changeMailID(event) {
    setMailId(event.target.value);
  }
  function changePassKey(event) {
    setPassKey(event.target.value);
  }
  function handleFname() {
    event.preventDefault();
    if (fName.length < 1) {
      setFNameError(true);
    } else {
      setFNameError(false);
    }
    if (lName.length < 1) {
      setLNameError(true);
    } else {
      setLNameError(false);
    }
    if (!(mailId.includes("@") && mailId.includes("."))) {
      setMailIdError(true);
    } else {
      setMailIdError(false);
    }
    if (passKey.length < 8) {
      setPassKeyError(true);
    } else {
      setPassKeyError(false);
    }
  }

  return (
    <>
      <form className="bg-white p-6 rounded-2xl">
        <FormField
          placeholderText={"First Name"}
          onChangeValue={changeFname}
          val={fName}
          Error={fNameError}
          errorMsg={"First Name Cannot be empty"}
        />

        <FormField
          placeholderText={"Last Name"}
          onChangeValue={changeLname}
          val={lName}
          Error={lNameError}
          errorMsg={"Last Name Cannot be empty"}
        />
        <FormField
          placeholderText={"Email Address"}
          onChangeValue={changeMailID}
          val={mailId}
          Error={mailIdError}
          errorMsg={"Enter Valid mail ID"}
        />
        <FormField
          placeholderText={"Password"}
          onChangeValue={changePassKey}
          val={passKey}
          Error={passKeyError}
          errorMsg={"Passwrod < 8"}
        />

        <TrialButton
          boldText={"CLAIM YOUR FREE TRIAL"}
          butColor={"green"}
          onClickChange={handleFname}
        />
        <p className="text-sm text-center text-Grayish-Blue">
          By clicking the button, you are agreeing to our{" "}
          <b className="text-Red">Terms and Services</b>
        </p>
      </form>
    </>
  );
}
