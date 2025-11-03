import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { children } from "../Types/global";

const queryClient = new QueryClient();

const TanstackProvider = ({ children }: children) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default TanstackProvider;
