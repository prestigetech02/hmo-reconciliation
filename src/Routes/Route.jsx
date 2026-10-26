
import Dashboard from "@/pages/Dashboard"

export const routes = [
    {
        path: 'dasboarrd',
        isProtected: true,
        component: Dashboard,
        role: ["hr","finance","admin"]
    }
]