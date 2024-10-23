import { FC } from "react";
import { Logo } from "../molecules/Logo";

export const Header: FC = () => {
  return (
    <header className="bg-navy-400 w-full h-16 sm:h-20 md:rounded-tr-2xl md:rounded-br-2xl md:w-24 md:h-full">
      <Logo />
    </header>
  );
};
