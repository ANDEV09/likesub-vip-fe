import AuthLayout from "~/features/auth/authLayout";
import LoginForm from "~/features/auth/Login/loginForm";

export default function Login() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}
