import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      QueryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
