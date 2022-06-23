import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface props {
  children?: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal = ({ children, active, setActive }: props) => {
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      document.addEventListener("click", (e) => {
        if ((e.target as Element).id === "PopupOverlay") setActive(false);
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  if (!active) return null;
  return (
    <div
      id="PopupOverlay"
      className="flex items-center justify-center absolute inset-0 w-full h-full bg-zinc-400/50"
    >
      <div className="flex rounded-xl bg-white p-7 shadow-xl relative">
        <i
          className="absolute left-2 top-2 hover:cursor-pointer"
          onClick={() => setActive(false)}
        >
          <IoMdClose />
        </i>
        {children}
      </div>
    </div>
  );
};

export default PopupModal;
