// src/hooks/useAppsQuery.ts
import { useQuery } from "@tanstack/react-query";
import { getApps } from "../api/apps";

import { App } from "@/types";

export const useAppsQuery = () => {
  return useQuery<App[], Error>({
    queryKey: ["apps"],
    queryFn: getApps,
    staleTime: 1000 * 60, // cache for 1 min
  });
};
