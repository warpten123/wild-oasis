// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "../../services/apiAuth";

// export function useUser() {
//   const {
//     isLoading,
//     data: user,
//     fetchStatus,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//   });
//   return {
//     isLoading,
//     user,
//     isAuthenticated: user?.user?.role === "authenticated",
//     fetchStatus,
//   };
// }
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.user?.role === "authenticated",
  };
}
