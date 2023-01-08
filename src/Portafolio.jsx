
import { NavColorProvider } from "./context/NavColorProvider";
import { PublicRoute } from "./router/PublicRoute";

export const Portafolio = () => {
    return (
        <NavColorProvider>
            <PublicRoute />
        </NavColorProvider>
    )
}
