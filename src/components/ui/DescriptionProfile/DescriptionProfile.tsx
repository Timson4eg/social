import { FC } from "react";
// import { EnumTypeProfile } from "../../types/types";
import style from "./Description.module.scss";

interface DescriptionProfileProps {
  name: string;
  job: string;
}

const DescriptionProfile: FC<DescriptionProfileProps> = ({ name, job }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.name}>{name}</div>
      <div className={style.job}>{job}</div>
    </div>
  );
};

export default DescriptionProfile;
