import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landingPage.routes.tsx"),
    route("login", "routes/loginPage.routes.tsx"),
    route("register", "routes/registerPage.routes.tsx"),

    route("client", "routes/user.routes.tsx", [
        index("routes/user.index.routes.tsx"), 
        route("create-order", "routes/user.create-order.routes.tsx"), 
        route("service-pricing", "routes/user.service-pricing.routes.tsx"), 
        route("support-request", "routes/user.support-request.routes.tsx"), 
]),
] satisfies RouteConfig;
