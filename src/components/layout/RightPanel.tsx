// // src/components/layout/RightPanel.tsx

import { NodeInspector } from "../inspector/NodeInspector";

export function RightPanel() {
  return (
    <div className="w-80 border-l border-gray-700 bg-gray-800 text-white">
      <div className="p-4 space-y-4">
        <h2 className="font-semibold">Node Inspector</h2>
        <NodeInspector />
      </div>
    </div>
  );
}
