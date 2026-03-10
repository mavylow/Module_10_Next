"use client";

import type { ReactNode } from "react";
import AuthProvider from "@providers/AuthProvider";
import ThemeProvider from "@providers/ThemeProvider";
import PopUpProvider from "@providers/PopupProvider";

interface IContextProvider {
  children: ReactNode;
}
function ContextProvider({ children }: IContextProvider) {
  return (
    <PopUpProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </PopUpProvider>
  );
}

export default ContextProvider;
