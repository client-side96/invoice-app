import { FC } from "react";
import Image from "next/image";
import logoSvg from "@/app/_assets/logo.svg";

export const Logo: FC = () => (
  <div
    aria-label="logo-background"
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-violet-500 rounded-tr-2xl rounded-br-2xl relative flex justify-center items-center"
  >
    <Image
      src={logoSvg}
      alt="logo"
      className="z-20 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
    />
    <div
      aria-label="logo-background-overlay"
      className="absolute w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-violet-250 rounded-br-2xl rounded-tl-2xl bottom-0 z-10"
    ></div>
  </div>
);
