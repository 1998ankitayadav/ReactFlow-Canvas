// src/hooks/useAppGraphQuery.ts
import { useQuery } from "@tanstack/react-query";
import { getAppGraph } from "../api/graph";
import { GraphResponse } from "../types";

export const useAppGraphQuery = (appId: string | null) => {
  return useQuery<GraphResponse, Error>({
    queryKey: ["graph", appId],
    queryFn: () => {
      if (!appId) throw new Error("No app selected");
      return getAppGraph(appId);
    },
    enabled: !!appId, // only run when appId is set
    staleTime: 1000 * 60,
  });
};
