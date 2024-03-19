import React from "react";
import style from "./Stories.module.scss";
import AddStories from "./AddStories";

interface StoriesListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function StoriesList<T>(props: StoriesListProps<T>) {
  return (
    <div className={style.wrapper}>
      <AddStories />
      {props.items.map(props.renderItem)}
    </div>
  );
}
