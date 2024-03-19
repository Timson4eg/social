import React from "react";
import style from "./ChatList.module.scss";

interface ChatListProps<T> {
  items: T[];
  renderItem: (items: T) => React.ReactNode;
}

export default function ChatList<T>(props: ChatListProps<T>) {
  return (
    <div className={style.wrapper}>{props.items.map(props.renderItem)}</div>
  );
}
