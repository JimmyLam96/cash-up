import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backend_config from "config/backend_config.json";
import useCurrentUser from "contexts/UserContext";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import TextInput from "components/inputs/TextInput";
import axios, { AxiosError } from "axios";
import Button from "components/butttons/Button";
import Form from "components/form/Form";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    username: string | undefined;
    password: string | undefined;
  }>({
    username: undefined,
    password: undefined,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { accessToken, setLoggedIn, setAccessToken, setRefreshToken } =
    useCurrentUser();
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const validateFields = () => {
    let errors: { username: string | undefined; password: string | undefined } =
      {
        username: username === "" ? "Username is required" : undefined,
        password: password === "" ? "Password is required" : undefined,
      };
    setErrors(errors);
    // console.log(errors.username);
    return !errors.username && !errors.password;
  };

  const handleSignin = async () => {
    if (!validateFields()) return;
    try {
      const response = await axios.post(
        `${backend_config.backend_uri}/login/`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      setLoggedIn(true);
      console.log(response);
      navigate("/");
    } catch (error: any) {
      setErrorMessage(error.response.data.detail);
    }
  };

  return (
    <div id="background" className=" flex justify-center items-center h-full">
      <Form>
        <label>Sign in</label>
        <TextInput
          type="text"
          placeholder="username"
          className={
            "w-full max-w-xs text-center rounded-md" +
            (errors.username ? " border-red-500 border-2" : "")
          }
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.username &&
              setErrors((prev) => ({ ...prev, username: undefined }));
            errorMessage !== "" && setErrorMessage("");
            setUsername(e.target.value);
          }}
          error={errors.username}
        />
        <TextInput
          type="password"
          placeholder="password"
          className={
            "w-full max-w-xs text-center rounded-md" +
            (errors.password ? " border-red-500 border-2" : "")
          }
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            errors.password &&
              setErrors((prev) => ({ ...prev, password: undefined }));
            errorMessage !== "" && setErrorMessage("");
            setPassword(e.target.value);
          }}
          error={errors.password}
        />
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
}

export default SignIn;
