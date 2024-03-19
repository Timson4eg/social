import { FiSearch } from "react-icons/fi";
import Input from "../../ui/Input/Input";
import style from "./Search.module.scss";
import { FC } from "react";

interface SearchProps {
  value: string;
  setValue: any;
}

const Search: FC<SearchProps> = (props) => {
  return (
    <div className={style.wrapper}>
      <FiSearch />
      <Input
        value={props.value}
        setValue={props.setValue}
        placeholder={"People,groups and messages"}
      />
    </div>
  );
};

export default Search;
