import { Navigate } from "react-router-dom";

export default function ClientIndexRedirect() {
    return <Navigate to="create-order" replace />;
}
