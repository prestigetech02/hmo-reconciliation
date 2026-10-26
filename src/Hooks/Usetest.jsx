import { mockLogin } from "@/Api/Mock";
import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";

export const useLogine = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: mockLogin,
        onSuccess: (data) => {
            console.log("successful", data)
        },
        onError: (err) => {
            console.error("failed ", err.message)
        }
    })
}