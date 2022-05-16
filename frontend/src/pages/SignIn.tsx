import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backend_config from "../config/backend_config.json";
import useCurrentUser from "../contexts/UserContext";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import TextInput from "../components/inputs/TextInput";

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
  const { accessToken, setAccessToken, setRefreshToken } = useCurrentUser();

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

    const response = await fetch(`${backend_config.backend_uri}/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();

    if (response.ok) {
      setAccessToken(data.access);
      setRefreshToken(data.refresh);
      navigate("/");
    } else {
      setErrorMessage(data.detail);
    }
  };

  return (
    <body className="bg-teal-200 flex justify-center items-center h-full">
      <div className="bg-white p-5 m-3  w-full max-w-2xl h-2/4 rounded-md">
        <form className="appearance-none flex flex-col gap-8 justify-center items-center">
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
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              className="bg-teal-200 p-2 rounded-md"
              onClick={handleSignin}
            >
              Sign in
            </button>
            <button type="button" className="bg-teal-200 p-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default SignIn;
