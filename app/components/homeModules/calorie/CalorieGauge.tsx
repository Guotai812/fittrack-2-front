"use client";
import React from "react";

interface CalorieGaugeProps {
  total: number;
  consumed: number;
}

const CalorieGauge: React.FC<CalorieGaugeProps> = ({ total, consumed }) => {
  const radius = 120;
  const stroke = 10;
  const circumference = Math.PI * radius; // half-circle
  const remaining = Math.max(total - consumed, 0);
  const progressRaw = Math.min(remaining / total, 1);
  const progress = Math.round(progressRaw * 10) / 10;
  const offset = circumference * (1 - progress);

  return (
    <svg
      width={radius * 2 + stroke}
      height={radius + stroke}
      viewBox={`0 0 ${radius * 2 + stroke} ${radius + stroke}`}
    >
      {/* Background Arc */}
      <path
        d={`M ${stroke / 2},${
          radius + stroke / 2
        } A ${radius},${radius} 0 0 1 ${radius * 2 + stroke / 2},${
          radius + stroke / 2
        }`}
        fill="none"
        stroke="#464643"
        strokeWidth={stroke}
      />
      {/* Progress Arc */}
      <path
        d={`M ${stroke / 2},${
          radius + stroke / 2
        } A ${radius},${radius} 0 0 1 ${radius * 2 + stroke / 2},${
          radius + stroke / 2
        }`}
        fill="none"
        stroke="#40D12A"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      {/* Text */}
      <text
        x="50%"
        y="70%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="36"
        className="font-san fill-white"
      >
        {Math.round((total - consumed) * 10) / 10} KCAL
      </text>
    </svg>
  );
};

export default CalorieGauge;
