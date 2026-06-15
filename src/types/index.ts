// src/types/index.ts
import { Node, Edge } from "@xyflow/react";

export interface App {
  id: string;
  name: string;
}

export interface GraphResponse {
  nodes: Node[];
  edges: Edge[];
}

export type InspectorTab = "config" | "runtime";

export type NodeStatus = "healthy" | "degraded" | "down";
