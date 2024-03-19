import React from "react";
import style from "./Stories.module.scss";
import { GoPlus } from "react-icons/go";

const AddStories = () => {
  return (
    <button className={style.item}>
      <div className={style.itemAdd}>
        <GoPlus />
      </div>

      {/* <Avatar img={user.img} type={user.status} /> */}
      <div>My Story</div>
    </button>
  );
};

export default AddStories;
