import React, { useState } from "react";
import useCurrentUser from "../contexts/UserContext";
import backend_config from "../config/backend_config.json";

function Dashboard() {
  const { accessToken } = useCurrentUser();
  const [data, setData] = useState();

  const handleClick = async () => {
    const response = await fetch(`${backend_config.backend_uri}/customers/1/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      //   mode: "cors",
    });
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  return (
    <div>
      Dashboard
      <button onClick={handleClick}>show customers</button>
      <p>customer 1 stats: {JSON.stringify(data)}</p>
    </div>
  );
}

export default Dashboard;
