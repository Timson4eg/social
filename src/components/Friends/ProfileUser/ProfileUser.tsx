import { FC } from "react";
import { BsThreeDots } from "react-icons/bs";
import style from "./ProfileUser.module.scss";
import { IUser } from "../../types/types.tsx";
import AvatarItem from "./AvatarItem.tsx";
import MyButton from "../../ui/Button/MyButton.tsx";

interface ProfileUserProps {
  user: IUser;
}

const ProfileUser: FC<ProfileUserProps> = ({ user }) => {
  return (
    <div className={style.wrapper}>
      <AvatarItem user={user} />
      <MyButton>
        <BsThreeDots />
      </MyButton>
    </div>
  );
};

export default ProfileUser;
