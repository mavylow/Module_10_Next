"use client";
import { ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store";
import { Provider } from "react-redux";
import "@/i18n";

interface ClientsInitProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ClientsInit({ children }: ClientsInitProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      const { startMockingSocial } = await import(
        "@sidekick-monorepo/internship-backend"
      );
      await startMockingSocial();
      setReady(true);
    }
    enableMocking();
  }, []);

  if (!ready) return null;

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}

export default ClientsInit;
