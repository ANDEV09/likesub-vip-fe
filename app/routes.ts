import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landingPage.routes.tsx"),
    route("login", "routes/loginPage.routes.tsx"),
    route("register", "routes/registerPage.routes.tsx"),

    route("client", "routes/user/user.routes.tsx", [
        index("routes/user/user.index.routes.tsx"), 
        route("create-order", "routes/user/user.create-order.routes.tsx"), 
        route("service-pricing", "routes/user/user.service-pricing.routes.tsx"), 
        route("support-request", "routes/user/user.support-request.routes.tsx"), 

        route("profile", "routes/user/user.profile.routes.tsx", [
            route("personal-details", "routes/user/profile/personal.routes.tsx"),
            route("change-password", "routes/user/profile/password.routes.tsx"),
            route("security", "routes/user/profile/security.routes.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
