import Button from "components/butttons/Button";
import { FC } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("[Dashboard] Error signing out: ", error.code);
  }
};

const MainHeader: FC = () => {
  return (
    <header className="flex gap-6 p-4 items-center justify-end w-full bg-primary-light">
      <Button to="/cashier">Cashier</Button>
      <Button to="/delivery">Delivery</Button>
      <Button to="/settings">Settings</Button>
      <Button onClick={handleSignOut}>Sign out</Button>
    </header>
  );
};

export default MainHeader;
