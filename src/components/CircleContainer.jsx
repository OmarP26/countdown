import React from "react";
import "../style/CircleContainer.css";

const CircleContainer = (props) => {
  const { done, max, radius, stroke, strokeWidth } = props;
  const size = (radius + strokeWidth) * 2;
  const length = Math.ceil(2 * radius * Math.PI);
  const remainingLength =
    length - Math.ceil(2 * radius * Math.PI) * (done / max);
  return (
    <svg
      className="clock"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://w3.org/2000/svg"
    >
      <g>
        <circle
          className="clock circle"
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          stroke={stroke}
          strokeDasharray={length}
          strokeDashoffset={-remainingLength}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className="circle--bg"
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          stroke="rgba(0, 0, 0, .1)"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </g>
    </svg>
  );
};

CircleContainer.defaultProps = {
  done: 0,
  max: 24,
  radius: 72,
  stroke: "#e91e63",
  strokeWidth: 8,
};

export default CircleContainer;
