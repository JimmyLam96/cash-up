import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backend_config from "../config/backend_config.json";
import useCurrentUser from "../contexts/UserContext";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setRefreshToken } = useCurrentUser();

  const handleSignin = async () => {
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
    }
  };

  return (
    <body className="bg-teal-200 flex justify-center items-center h-full">
      <div className="bg-white p-3 m-3  w-full max-w-2xl h-2/4 rounded-md">
        <form className="appearance-none flex flex-col gap-8 justify-center items-center">
          <label>Sign in</label>
          <input
            type="text"
            placeholder="username"
            className="w-full text-center appearance-none"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <input
            type="password"
            placeholder="password"
            className="w-full text-center appearance-none"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div className="flex gap-4 justify-center">
            <button type="button" onClick={handleSignin}>
              Sign in
            </button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default SignIn;
