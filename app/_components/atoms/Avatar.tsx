import { FC } from "react";
import Image from "next/image";
import defaultAvatarImage from "@/app/_assets/default_avatar.jpg";

type Props = {
  imageUrl?: string;
};
export const Avatar: FC<Props> = ({ imageUrl }) => (
  <div
    role="img"
    className="relative w-10 h-10 rounded-full bg-slate-50 overflow-hidden"
  >
    <Image
      src={imageUrl ?? defaultAvatarImage}
      alt="User avatar"
      className="absolute"
      style={{ objectFit: "cover" }}
    />
  </div>
);
