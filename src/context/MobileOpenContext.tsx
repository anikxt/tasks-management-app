import { createContext, ReactNode, useState } from 'react';

export interface MobileOpenContext {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileOpenContext = createContext<MobileOpenContext | undefined>(
  undefined
);

export function MobileOpenProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <MobileOpenContext.Provider value={{ mobileOpen, setMobileOpen }}>
      {children}
    </MobileOpenContext.Provider>
  );
}
