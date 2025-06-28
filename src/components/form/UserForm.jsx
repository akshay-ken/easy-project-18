import { useState } from "react";
import { TrialButton } from "../TrialButton";
import { FormField } from "./FormField";

const formFieldsData = [
  {
    id: 1,
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    errorMsg: "First Name cannot be empty",
  },
  {
    id: 2,
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    errorMsg: "Last Name cannot be empty",
  },
  {
    id: 3,
    name: "email",
    placeholder: "Email Address",
    type: "email",
    errorMsg: "Looks like this is not an email",
  },
  {
    id: 4,
    name: "password",
    placeholder: "Password",
    type: "password",
    errorMsg: "Password cannot be empty",
  },
];

export function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name can NOT be Empty";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name can NOT be Empty";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Passwrod must be 8 char long";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Not an email ID";
    }
    setErrors(newErrors);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
      <form className="bg-white p-6 rounded-2xl">
        {formFieldsData.map((field) => {
          return (
            <FormField
              key={field.id}
              name={field.name}
              placeholderText={field.placeholder}
              errorMsg={errors[field.name]}
              val={formData[field.name]}
              type={field.type}
              onChangeValue={handleChange}
              Error={!!errors[field.name]}
            />
          );
        })}
        <TrialButton
          boldText={"CLAIM YOUR FREE TRIAL"}
          butColor={"green"}
          onClickChange={handleSubmit}
        />
        <p className="text-sm text-center text-Grayish-Blue">
          By clicking the button, you are agreeing to our{" "}
          <b className="text-Red">Terms and Services</b>
        </p>
      </form>
    </>
  );
}
