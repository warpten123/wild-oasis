import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"], //to uniquely identify in our cahce
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
