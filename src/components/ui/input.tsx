import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="border px-2 py-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
