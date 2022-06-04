import TextInput from "components/inputs/TextInput";
import Button from "components/butttons/Button";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Form from "components/form/Form";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (password !== rePassword) {
      setErrors({
        ...errors,
        rePassword: "Passwords do not match",
      });
    } else {
      setErrors({
        ...errors,
        rePassword: undefined,
      });
    }
  }, [password, rePassword]);

  const validateFields = () => {
    let errors: { [key: string]: string | undefined } = {
      email: email === "" ? "Username is required" : undefined,
      password: password === "" ? "Password is required" : undefined,
      rePassword:
        rePassword === "" ? "Confirm password is required" : undefined,
    };
    setErrors(errors);
    return !errors.username && !errors.password && !errors.rePassword;
  };

  const handleSignUp = async () => {
    if (!validateFields()) return;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Signed in
      const user = response.user;
      console.log(response);
    } catch (error: any) {
      console.error("[SignUp] Error signing up: ", error.code);
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      id="background"
      className="flex items-center w-full justify-center h-full"
    >
      <Form>
        <label>Sign up</label>
        <TextInput
          type="text"
          placeholder="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.email &&
              setErrors((prev) => ({ ...prev, email: undefined }));
            setEmail(e.target.value);
          }}
          error={errors.email}
        />
        <TextInput
          type="password"
          placeholder="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.password &&
              setErrors((prev) => ({ ...prev, password: undefined }));
            setPassword(e.target.value);
          }}
          error={errors.password}
        />
        <TextInput
          type="password"
          placeholder="confirm password"
          value={rePassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // errors.rePassword &&
            //   setErrors((prev) => ({ ...prev, rePassword: undefined }));
            setRePassword(e.target.value);
          }}
          error={errors.rePassword}
        />
        {errorMessage && (
          <div className="flex gap-2 items-center w-full max-w-xs">
            <AiOutlineExclamationCircle style={{ fill: "red" }} />
            <p className="text-red-500 text-xs">{errorMessage}</p>
          </div>
        )}
        <div className="flex gap-3">
          <Button onClick={handleSignUp}>Submit</Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
