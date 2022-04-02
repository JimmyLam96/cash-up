import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const handleSignin = () => {
    console.log(username);
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
          />
          <div className="flex gap-4 justify-center">
            <button type="submit" onClick={handleSignin}>
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
