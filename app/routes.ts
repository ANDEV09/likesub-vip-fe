import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landingPage.routes.tsx"),
    route("login", "routes/loginPage.routes.tsx"),
    route("register", "routes/registerPage.routes.tsx"),
    route("dashboard", "routes/dashboard.routes.tsx")
] satisfies RouteConfig;
