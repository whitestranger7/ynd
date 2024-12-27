import type { ChildrenOnlyRequired } from "../types";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/queryConfig";

export const ConfigProvider = ({children}: ChildrenOnlyRequired) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
