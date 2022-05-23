import React, { FC, useState } from "react";
import useCurrentUser from "../contexts/UserContext";
import backend_config from "../config/backend_config.json";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Button from "components/butttons/Button";
import ThreeDotsWave from "components/animations/ThreeDotsWave";

const Dashboard: FC = () => {
  const { accessToken } = useCurrentUser();
  const [data, setData] = useState();

  const handleClick = async () => {
    const response = await fetch(`${backend_config.backend_uri}/customers/1/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error("[Dashboard] Error signing out: ", error.code);
    }
  };
  return (
    <div>
      Dashboard
      <Button onClick={handleClick}>show customers</Button>
      <Button onClick={handleSignOut}>Sign out</Button>
      <p>customer 1 stats: {JSON.stringify(data)}</p>
    </div>
  );
};

export default Dashboard;
