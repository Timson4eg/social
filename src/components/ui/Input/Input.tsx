import { FC } from "react";
import style from "./Input.module.scss";

interface InputProps {
  value: string;
  setValue: any;
  placeholder: string;
}

const Input: FC<InputProps> = ({ value, setValue, placeholder }) => {
  return (
    <input
      className={style.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
