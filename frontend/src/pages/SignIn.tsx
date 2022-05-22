import React, { useState, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCurrentUser from "contexts/UserContext";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import TextInput from "components/inputs/TextInput";
import Button from "components/butttons/Button";
import Form from "components/form/Form";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import Checkbox from "components/inputs/Checkbox";

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    email: string | undefined;
    password: string | undefined;
  }>({
    email: undefined,
    password: undefined,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { accessToken, setLoggedIn, setAccessToken, setRefreshToken } =
    useCurrentUser();
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const validateFields = () => {
    let errors: { email: string | undefined; password: string | undefined } = {
      email: email === "" ? "email is required" : undefined,
      password: password === "" ? "Password is required" : undefined,
    };
    setErrors(errors);
    // console.log(errors.email);
    return !errors.email && !errors.password;
  };

  const handleSignin = async () => {
    if (!validateFields()) return;
    try {
      await setPersistence(
        auth,
        stayLoggedIn ? browserLocalPersistence : browserSessionPersistence
      );
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      console.log(response);
      navigate("/");
    } catch (error: any) {
      console.error("[SignIn] Error signing in: ", error.code);
      setErrorMessage(error.message);
    }
  };

  return (
    <div id="background" className=" flex justify-center items-center h-full">
      <Form>
        <label>Sign in</label>
        <TextInput
          type="text"
          placeholder="email"
          className={errors.email ? " border-red-500 border-2" : ""}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.email &&
              setErrors((prev) => ({ ...prev, email: undefined }));
            errorMessage !== "" && setErrorMessage("");
            setEmail(e.target.value);
          }}
          error={errors.email}
        />
        <TextInput
          type="password"
          placeholder="password"
          className={errors.password ? " border-red-500 border-2" : ""}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.password &&
              setErrors((prev) => ({ ...prev, password: undefined }));
            errorMessage !== "" && setErrorMessage("");
            setPassword(e.target.value);
          }}
          error={errors.password}
        />
        <div className="flex gap-4 items-center">
          <Checkbox />
          <p>Stay logged in</p>
        </div>
        {errorMessage && (
          <div className="flex gap-2 items-center w-full max-w-xs">
            <AiOutlineExclamationCircle style={{ fill: "red" }} />
            <p className="text-red-500 text-xs">{errorMessage}</p>
          </div>
        )}
        <p>
          No account yet?{" "}
          <Link
            to="/signup"
            className="text-secondary-orange hover:border-b-2 hover:border-secondary-orange"
          >
            Sign up
          </Link>
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={handleSignin}>Sign in</Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
