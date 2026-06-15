// src/components/layout/Sidebar.tsx
import React from "react";
import { useAppGraphStore } from "../../store/store";

export function Sidebar() {
  const { setSelectedAppId } = useAppGraphStore();
  return (
    <div className="w-48 bg-gray-900 text-white p-4 border-r border-gray-700">
      <h2 className="font-bold mb-2">Apps</h2>

      <ul className="space-y-2">
        <li
          className="border border-gray-700 p-2 rounded hover:bg-gray-800 cursor-pointer"
          onClick={() => setSelectedAppId("crm")}
        >
          CRM App
        </li>
        <li
          className="border border-gray-700 p-2 rounded hover:bg-gray-800 cursor-pointer"
          onClick={() => setSelectedAppId("inventory")}
        >
          Inventory App
        </li>
        <li
          className="border border-gray-700 p-2 rounded hover:bg-gray-800 cursor-pointer"
          onClick={() => setSelectedAppId("ecommerce")}
        >
          Ecommerce App
        </li>
      </ul>
    </div>
  );
}
