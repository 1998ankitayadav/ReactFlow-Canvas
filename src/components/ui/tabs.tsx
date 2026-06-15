import React, { ReactNode, useState } from "react";

interface TabsProps {
  children: ReactNode;
}
export function Tabs({ children }: TabsProps) {
  return <div>{children}</div>;
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-2">{children}</div>;
}

export function TabsTrigger({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button className="px-3 py-1 border rounded" onClick={onClick}>
      {children}
    </button>
  );
}

export function TabsContent({ children }: { children: ReactNode }) {
  return <div className="mt-2">{children}</div>;
}
