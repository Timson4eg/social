import ProfileUser from "./ProfileUser/ProfileUser";
import style from "./FriendBlock.module.scss";
import Search from "./Search/Search";
import StoriesList from "./Stories/StoriesList";
import { useState } from "react";
import { IUser } from "../types/types";
import Stories from "./Stories/Stories";
import ChatList from "./ChatList/ChatList";
import ChatItem from "./ChatList/ChatItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useSearch from "../../hooks/useSearch";
import { IUserChat } from "../../types/user";

const FriendsBlock = () => {
  const [value, setValue] = useState<string>("");
  const { users } = useSelector((state: RootState) => state.users);
  const { searchChat } = useSearch(users, value);

  return (
    <div className={style.wrapper}>
      <ProfileUser user={users[0]} />
      <Search value={value} setValue={setValue} />
      <StoriesList
        items={users}
        renderItem={(user: IUser) => <Stories user={user} key={user.id} />}
      />
      <ChatList
        items={searchChat}
        renderItem={(item: IUserChat) => <ChatItem item={item} key={item.id} />}
      />
    </div>
  );
};

export default FriendsBlock;
