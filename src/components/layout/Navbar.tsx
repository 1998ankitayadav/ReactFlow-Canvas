// src/components/layout/Navbar.tsx
import React from "react";
import { Node, Edge } from "@xyflow/react";

export function Navbar({
  onFitView,
  nodes,
  edges,
  setNodes,
}: {
  onFitView: () => void;
  nodes: Node[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
      <h1 className="font-bold">App Graph Builder</h1>
      <div className="space-x-2">
        <button
          onClick={onFitView}
          className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Fit View
        </button>
        <button
          onClick={() => {
            localStorage.setItem("graph", JSON.stringify({ nodes, edges }));
            alert("Graph saved to localStorage!");
          }}
          className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Save
        </button>
        <button
          onClick={() => {
            const dataStr =
              "data:text/json;charset=utf-8," +
              encodeURIComponent(JSON.stringify({ nodes, edges }));
            const downloadAnchor = document.createElement("a");
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "graph.json");
            downloadAnchor.click();
          }}
          className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Export
        </button>
        <button
          onClick={() => {
            const newNode = {
              id: `n${nodes.length + 1}`,
              type: "default",
              position: { x: 100 + nodes.length * 50, y: 100 },
              data: { label: `New Node ${nodes.length + 1}` },
            };
            setNodes((nds) => [...nds, newNode]);
          }}
          className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
        >
          Add Node
        </button>
        <button
          onClick={() => alert("Deploy triggered")}
          className="bg-green-600 hover:bg-green-500 px-2 py-1 rounded"
        >
          Deploy
        </button>
      </div>
    </div>
  );
}
