import React from "react";
import clsx from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "error";
}

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={clsx(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variant === "default" && "bg-gray-200 text-gray-800",
        variant === "success" && "bg-green-100 text-green-800",
        variant === "error" && "bg-red-100 text-red-800",
        className
      )}
    />
  );
}
