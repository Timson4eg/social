import { FC } from "react";
import style from "./MyButton.module.scss";

interface ButtonProps {
  children: any;
}

const MyButton: FC<ButtonProps> = ({ children }) => {
  return <button className={style.myButton}>{children}</button>;
};

export default MyButton;

//icons ==
