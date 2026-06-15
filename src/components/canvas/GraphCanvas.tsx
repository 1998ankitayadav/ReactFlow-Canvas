// src/components/canvas/GraphCanvas.tsx

import React, { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
} from "@xyflow/react";

import { useAppGraphStore } from "../../store/store";
import { useAppGraphQuery } from "../../hooks/useAppGraphQuery";

export function GraphCanvas() {
  const { selectedAppId, setSelectedNodeId } = useAppGraphStore();

  const {
    data: graph,
    isLoading,
    isError,
    error,
  } = useAppGraphQuery(selectedAppId);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (graph) {
      setNodes(graph.nodes);
      setEdges(graph.edges);
    }
  }, [graph, setNodes, setEdges]);

  // const onInit = useCallback((instance: any) => {
  //   instance.fitView();
  // }, []);
  const onInit = useCallback((instance: any) => {
    setTimeout(() => {
      instance.fitView({
        padding: 0.3,
        duration: 800,
      });
    }, 100);
  }, []);
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId]
  );

  useEffect(() => {
    const handleDelete = (e: KeyboardEvent) => {
      if (e.key !== "Delete" && e.key !== "Backspace") return;

      const selectedId = useAppGraphStore.getState().selectedNodeId;

      if (!selectedId) return;

      setNodes((nds) => nds.filter((n) => n.id !== selectedId));

      setEdges((eds) =>
        eds.filter(
          (edge) => edge.source !== selectedId && edge.target !== selectedId
        )
      );

      useAppGraphStore.getState().setSelectedNodeId(null);
    };

    window.addEventListener("keydown", handleDelete);

    return () => {
      window.removeEventListener("keydown", handleDelete);
    };
  }, [setNodes, setEdges]);

  if (!selectedAppId) {
    return (
      <div className="flex items-center justify-center h-[600px] text-gray-400">
        Select an app from the sidebar
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[600px] text-white">
        Loading graph...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[600px] text-red-400">
        {error?.message}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{
          padding: 0.3,
        }}
      >
        <Background variant="dots" gap={16} size={1} color="#555" />

        <Controls />
      </ReactFlow>
    </div>
  );
}
