import Button from "components/butttons/Button";
import React, { FC } from "react";

const MainHeader: FC = () => {
  return (
    <div className="flex gap-6 p-4 items-center justify-end w-full bg-primary-light">
      <Button to="/cashier">Cashier</Button>
      <Button to="/delivery">Delivery</Button>
      <Button to="/settings">Settings</Button>
    </div>
  );
};

export default MainHeader;
