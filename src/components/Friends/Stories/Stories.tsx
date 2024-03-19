import { FC } from "react";
import Avatar from "../../ui/Avatar/Avatar";
import { IUser } from "../../types/types";
import style from "./Stories.module.scss";
import useNameAbbreviations from "../../../hooks/useNameAbbreviations";

interface storiesProps {
  user: IUser;
}
const Stories: FC<storiesProps> = ({ user }) => {
  const shortCut = useNameAbbreviations(user.name);
  return (
    <button className={style.item}>
      <Avatar img={user.img} type={user.status} />
      <div>{shortCut + "."}</div>
    </button>
  );
};

export default Stories;
