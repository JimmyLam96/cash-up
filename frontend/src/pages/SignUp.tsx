import TextInput from "components/inputs/TextInput";
import Button from "components/butttons/Button";
import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div id="background" className="flex items-center w-full justify-center">
      <form className="appearance-none flex flex-col gap-8 justify-center items-center">
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
          placeholder="password"
          value={rePassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // errors.rePassword &&
            //   setErrors((prev) => ({ ...prev, rePassword: undefined }));
            setRePassword(e.target.value);
          }}
          error={errors.rePassword}
        />
        <Button onClick={handleSignUp}>Submit</Button>
        <Button>Cancel</Button>
      </form>
    </div>
  );
}

export default SignUp;
