import LoginForm from "@/components/Login/LoginForm";
import LoginImage from "@/components/Login/LoginImage";

export default function Login(){
    return (
    <div className="flexbox-login-background-container">
        <div className="login-container">
            <LoginImage></LoginImage>
            <LoginForm></LoginForm>
        </div>
    </div>
    )
}