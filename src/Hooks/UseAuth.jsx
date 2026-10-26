import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import axios from "axios";

const API = axios.create({
    baseURL:  "http://localhost:5000/api",
    withCredentials: true
})

export const  UseCurrentuser = () => {
    return useQuery({
        queryKey: "authUser",
        queryFn: async () => {
            const { data } = await API.get("http://localhost:5000/api/auth/me")
            return data
        },
        retry: false,
        staleTime: 100 * 60 * 5
    })
}

export const useLogin = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const { data } = await API.post("http://localhost:5000/api/auth/me")
            return data
        },
        onSuccess: (user) => {
            queryClient.setQueryData(['authUser'],user)
        }

    })
}