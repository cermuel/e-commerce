import { ProgressBarType } from "@/types";
import react from "react";

const Progress = ({ strokeWidth, percentage }: ProgressBarType) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle: any = {
    stroke: "#7378DE",
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((5 - percentage) / 5) * diameter}px`,
  };

  return (
    <svg
      className={"CircularProgressbar"}
      viewBox="0 0 100 100"
      width={25}
      height={25}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: "#d6d6d6",
        }}
      />

      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: "#7378DE",
          fontSize: "60px",
          fontWeight: "bold",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {`${percentage}`}
      </text>
    </svg>
  );
};
export default Progress;
