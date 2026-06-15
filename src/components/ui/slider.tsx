import React from "react";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Slider(props: SliderProps) {
  return (
    <input
      type="range"
      {...props}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
    />
  );
}
