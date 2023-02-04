
import { NavColorProvider } from "./context/NavColorProvider";
import { AppRoute } from "./router/AppRoute";

export const Portafolio = () => {
    return (
        <NavColorProvider>
            <AppRoute />
        </NavColorProvider>
    )
}
