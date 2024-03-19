import { FC } from "react";
import style from "./Avatar.module.scss";
import cn from "clsx";

interface AvatarProps {
  img: string;
  type: string;
}

const Avatar: FC<AvatarProps> = ({ img, type }) => {
  return <img src={`${img}`} className={cn(style.avatar, style[type])}></img>;
};

export default Avatar;

// { [styles.purple]: color === 'purple' },
