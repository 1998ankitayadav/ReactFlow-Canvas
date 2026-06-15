// src/components/ui/sheet.tsx
import React, { ReactNode, useState } from "react";
import clsx from "clsx";

interface SheetProps {
  children: ReactNode;
}

export function Sheet({ children }: SheetProps) {
  return <div className="relative">{children}</div>;
}

interface SheetContentProps {
  children: ReactNode;
  side?: "left" | "right";
  open?: boolean;
}

export function SheetContent({
  children,
  side = "right",
  open = true,
}: SheetContentProps) {
  return (
    <div
      className={clsx(
        "fixed top-0 h-full w-64 bg-white shadow-lg transition-transform",
        side === "right" ? "right-0" : "left-0",
        open
          ? "translate-x-0"
          : side === "right"
          ? "translate-x-full"
          : "-translate-x-full"
      )}
    >
      {children}
    </div>
  );
}
