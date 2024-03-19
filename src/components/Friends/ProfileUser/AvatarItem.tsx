import { FC } from "react";
import { IUser } from "../../types/types";
import Avatar from "../../ui/Avatar/Avatar";
import style from "./ProfileUser.module.scss";
import DescriptionProfile from "../../ui/DescriptionProfile/DescriptionProfile";

interface AvatarItemsProps {
  user: IUser;
  type?: "string";
}

const AvatarItem: FC<AvatarItemsProps> = ({ user }) => {
  //   console.log(type);
  return (
    <div className={style.avatarName}>
      <Avatar img={user.img} type={"profile"} />
      <DescriptionProfile
        name={user.name}
        job={user.job}
        // type={EnumTypeProfile.DESCRIPTION}
      />
    </div>
  );
};

export default AvatarItem;
