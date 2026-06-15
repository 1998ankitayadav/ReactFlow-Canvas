// src/components/inspector/NodeInspector.tsx
import { useAppGraphStore } from "../../store/store";

import { InspectorTab, NodeStatus } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { useState } from "react";

export function NodeInspector() {
  const { selectedNodeId, activeInspectorTab, setActiveInspectorTab } =
    useAppGraphStore();
  const [status, setStatus] = useState<NodeStatus>("healthy");
  const [capacity, setCapacity] = useState<number>(50);
  const [description, setDescription] = useState<string>(
    "Main Customer Relationship Management System"
  );
  const nodeNames: Record<string, string> = {
    crm: "CRM App",
    inventory: "Inventory App",
    ecommerce: "Ecommerce App",
    db: "Database",
    payment: "Payment",
    user: "User Service",
    cache: "Cache",
    order: "Order Mgmt",
  };
  if (!selectedNodeId) {
    return <p className="text-gray-500">No node selected</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">
          {" "}
          {nodeNames[selectedNodeId] || selectedNodeId}
        </h2>

        <Badge
          variant={
            status === "healthy"
              ? "success"
              : status === "degraded"
              ? "default"
              : "error"
          }
        >
          {status}
        </Badge>
      </div>

      <Tabs
        value={activeInspectorTab}
        onValueChange={(val) => setActiveInspectorTab(val as InspectorTab)}
      >
        <TabsList>
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="runtime">Runtime</TabsTrigger>
        </TabsList>

        {/* Config Tab */}
        <TabsContent value="config" className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              // defaultValue={`Node ${selectedNodeId}`}
              defaultValue={nodeNames[selectedNodeId] || selectedNodeId}
              className="bg-gray-900 border border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="capacity">Capacity</Label>
            <div className="flex items-center gap-2">
              <Slider
                id="capacity"
                value={[capacity]}
                onValueChange={(val) => setCapacity(val[0])}
                max={100}
                step={1}
                className="accent-blue-400"
              />

              <Input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-16 bg-gray-900 border border-gray-700 text-white"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white rounded p-2"
              placeholder="Enter description..."
            />
          </div>
        </TabsContent>

        {/* Runtime Tab */}
        <TabsContent value="runtime" className="space-y-4">
          <p>CPU Usage: 45%</p>
          <p>Memory Usage: 1.2 GB</p>
          <p>Requests/sec: 120</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
