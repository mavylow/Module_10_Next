"use client";
import { ReactNode, useEffect } from "react";
import { startMockingSocial } from "@sidekick-monorepo/internship-backend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ClientsInitProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ClientsInit({ children }: ClientsInitProps) {
  useEffect(() => {
    async function enableMocking() {
      await startMockingSocial();
    }
    enableMocking();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ClientsInit;
