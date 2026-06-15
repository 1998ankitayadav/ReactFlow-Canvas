// src/api/apps.ts
import { App } from "@/types";

export const getApps = (): Promise<App[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve([
          { id: "crm", name: "CRM App" },
          { id: "inventory", name: "Inventory App" },
          { id: "ecommerce", name: "Ecommerce App" },
        ]);
      } catch (err) {
        reject(err);
      }
    }, 1000); // simulate latency
  });
};
