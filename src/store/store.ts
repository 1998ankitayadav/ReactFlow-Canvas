// src/store/store.ts
import { create } from "zustand";
import { InspectorTab } from "@/types";

interface AppGraphState {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeInspectorTab: InspectorTab;
  setSelectedAppId: (id: string | null) => void;
  setSelectedNodeId: (id: string | null) => void;
  setMobilePanelOpen: (open: boolean) => void;
  setActiveInspectorTab: (tab: InspectorTab) => void;
}

export const useAppGraphStore = create<AppGraphState>((set) => ({
  selectedAppId: "crm",
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: "config",
  setSelectedAppId: (id) => set({ selectedAppId: id }),
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  setMobilePanelOpen: (open) => set({ isMobilePanelOpen: open }),
  setActiveInspectorTab: (tab) => set({ activeInspectorTab: tab }),
}));
