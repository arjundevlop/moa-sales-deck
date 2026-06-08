import { createContext, useContext, useState, type ReactNode } from "react";
import { type OpportunityId, opportunities } from "@/content/deck";

interface OpportunityCtx {
  active: OpportunityId;
  setActive: (id: OpportunityId) => void;
}

const Ctx = createContext<OpportunityCtx | null>(null);

export function OpportunityProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<OpportunityId>("retail");
  return <Ctx.Provider value={{ active, setActive }}>{children}</Ctx.Provider>;
}

export function useOpportunity() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useOpportunity must be used within OpportunityProvider");
  return { ...ctx, data: opportunities[ctx.active] };
}
