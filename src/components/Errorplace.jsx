import { useRouteError, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Errorplace() {
    const error = useRouteError()
    const navigate = useNavigate()
    const message = error?.statusText || error?.message || "Something went wrong"

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md rounded-xl border bg-card p-8 text-center shadow-sm">
            <h1 className="text-xl font-semibold text-foreground">Oops</h1>
            <p className="mt-2 text-sm text-muted-foreground">{message}</p>
            <Button className="mt-6" onClick={() => navigate(0)}>Retry</Button>
        </div>
        </div>
    )
}
export default Errorplace