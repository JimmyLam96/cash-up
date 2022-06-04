import { FC, ReactNode } from "react";
import MainHeader from "components/main-header/MainHeader";

type props = {
  children?: ReactNode;
};

const MainLayout: FC = ({ children }: props) => {
  return (
    <main className="flex flex-col w-full h-full">
      <MainHeader />
      {children}
    </main>
  );
};

export default MainLayout;
