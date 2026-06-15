// src/components/ui/button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-3 py-1 rounded text-sm font-medium transition-colors",
        variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "outline" &&
          "border border-gray-300 text-gray-700 hover:bg-gray-100",
        className
      )}
    />
  );
}
