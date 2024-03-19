import { FC } from "react";
import Avatar from "../../ui/Avatar/Avatar";
import DescriptionProfile from "../../ui/DescriptionProfile/DescriptionProfile";
import { IUserChat } from "../FriendsBlock";
import style from "./ChatItem.module.scss";

interface ChatItemProps {
  item: IUserChat;
}

const ChatItem: FC<ChatItemProps> = ({ item }) => {
  return (
    <div className={style.field}>
      <Avatar
        img={
          "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
        }
        type={"profile"}
      />
      <DescriptionProfile name={item.name} job={item.lastMessage} />
      <div className={style.interface}>
        <div className={style.time}>9:42</div>
        <div>status</div>
      </div>
    </div>
  );
};

export default ChatItem;
