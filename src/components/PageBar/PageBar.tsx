import { FiPhone } from "react-icons/fi";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaRegSun } from "react-icons/fa6";

import style from "./PageBar.module.scss";
import MyButton from "../ui/Button/MyButton";

const PageBar: React.FC = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.log}>LOg</div>
        <div className={style.buttons}>
          <MyButton>
            <LiaUserFriendsSolid />
          </MyButton>

          <MyButton>
            <IoChatbubblesOutline />
          </MyButton>
          <MyButton>
            <IoSettingsOutline />
          </MyButton>
          <MyButton>
            <FiPhone />
          </MyButton>
        </div>
        <FaRegSun className={style.mode} />
      </div>
    </div>
  );
};

export default PageBar;
