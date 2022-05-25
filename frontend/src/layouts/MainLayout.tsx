import { FC, ReactNode } from "react";
import MainHeader from "components/main-header/MainHeader";

type props = {
  children?: ReactNode;
};

const MainLayout: FC = ({ children }: props) => {
  return (
    <div className="w-full h-full">
      <MainHeader />
      {children}
    </div>
  );
};

export default MainLayout;
