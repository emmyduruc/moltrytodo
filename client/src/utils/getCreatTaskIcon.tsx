import React from "react";
import { Icon } from "../component/Icons/Icon";
import { Pen } from "../component/Icons/Pen";
import { Timer } from "../component/Icons/Timer";
import { Tag } from "../component/Icons/Tag";
import { Flag } from "../component/Icons/Flag";
import colors from "./colors";

export const getCreatTaskIcon = (name: string) => {
  switch (name) {
    case "title":
      return <Pen />;
    case "timer":
      return <Icon name="time-outline" size={25} color={colors.purple[200]} />;
    case "alarm":
      return <Timer />;
    case "tag":
      return <Tag />;
    case "flag":
      return <Flag />;
    default:
      return <Pen />;
  }
};
