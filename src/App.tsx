// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useNodesState, useEdgesState } from "@xyflow/react";

import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { RightPanel } from "./components/layout/RightPanel";
import { GraphCanvas } from "./components/canvas/GraphCanvas";

const queryClient = new QueryClient();

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleFitView = () => {
    console.log("Fit View triggered");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <Navbar
          onFitView={handleFitView}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
        />
        <div className="flex flex-1 min-h-0">
          <Sidebar />

          {/* <div className="flex-1 min-h-0">
            <GraphCanvas />
          </div> */}
          <div className="flex-1 h-full">
            <GraphCanvas />
          </div>

          <RightPanel />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
