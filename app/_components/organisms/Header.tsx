import { FC } from "react";
import { Logo } from "../molecules/Logo";
import { Avatar } from "../atoms/Avatar";

export const Header: FC = () => {
  return (
    <header className="flex justify-between pr-6 items-center bg-navy-400 w-full h-16 sm:h-20 md:flex-col md:pr-0 md:pb-6 md:rounded-tr-2xl md:rounded-br-2xl md:w-24 md:h-full">
      <Logo />
      <Avatar />
    </header>
  );
};
