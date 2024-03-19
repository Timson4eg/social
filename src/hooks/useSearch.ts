import React, { useMemo } from "react";
import { IUserChat } from "../components/Friends/FriendsBlock";

const useSearch = (users: IUserChat[], value: string) => {
  const searchChatName = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);
  const searchChatMessage = useMemo(() => {
    return users.filter((user) =>
      user.lastMessage.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);

  //   const searchChat = [...searchChatName, ...searchChatMessage];

  return {
    searchChat: [...new Set([...searchChatMessage, ...searchChatName])],
  };
};

export default useSearch;
