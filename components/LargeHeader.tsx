import { LargeHeaderType } from "@/types";
import React from "react";

const LargeHeader = ({ title }: LargeHeaderType) => {
  return <div className="font-semibold text-4xl">{title}</div>;
};

export default LargeHeader;
