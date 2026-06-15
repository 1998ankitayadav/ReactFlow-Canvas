import { GraphResponse } from "../types";

const mockGraph: GraphResponse = {
  nodes: [
    // 🟦 ROW 1: APPS
    {
      id: "crm",
      type: "default",
      position: { x: 250, y: 100 },
      data: { label: "CRM App" },
    },
    {
      id: "inventory",
      type: "default",
      position: { x: 300, y: 100 },
      data: { label: "Inventory App" },
    },
    {
      id: "ecommerce",
      type: "default",
      position: { x: 500, y: 100 },
      data: { label: "Ecommerce App" },
    },

    // 🟩 ROW 2: SERVICES
    {
      id: "db",
      type: "default",
      position: { x: 150, y: 300 },
      data: { label: "Database" },
    },
    {
      id: "payment",
      type: "default",
      position: { x: 350, y: 300 },
      data: { label: "Payment" },
    },
    {
      id: "user",
      type: "default",
      position: { x: 550, y: 300 },
      data: { label: "User Service" },
    },

    // 🟨 ROW 3: INFRA
    {
      id: "cache",
      type: "default",
      position: { x: 200, y: 500 },
      data: { label: "Cache" },
    },
    {
      id: "order",
      type: "default",
      position: { x: 450, y: 500 },
      data: { label: "Order Mgmt" },
    },
  ],

  edges: [
    // Apps → Services
    {
      id: "e1",
      source: "crm",
      target: "db",
      // label: "uses",
      type: "default",
    },
    {
      id: "e2",
      source: "inventory",
      target: "db",
      // label: "uses",
      type: "default",
    },
    {
      id: "e3",
      source: "ecommerce",
      target: "payment",
      // label: "uses",
      type: "default",
    },
    {
      id: "e4",
      source: "ecommerce",
      target: "user",
      // label: "auth",
      type: "default",
    },

    // Services → Infra
    {
      id: "e5",
      source: "db",
      target: "cache",
      // label: "caches",
      type: "default",
    },
    {
      id: "e6",
      source: "payment",
      target: "order",
      // label: "creates",
      type: "default",
    },
    {
      id: "e7",
      source: "user",
      target: "cache",
      // label: "stores",
      type: "default",
    },
  ],
};

export const getAppGraph = async (appId: string): Promise<GraphResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockGraph;
};
