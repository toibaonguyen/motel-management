import Link from "next/link";
export default function LoginForm(){
    return(
        <form className="login-form">
                <h2 className="login-label">Login</h2>

                <input className="login-input-username" 
                                type="text" id="username" 
                                name="username" placeholder="Username" 
                                required></input>
                        
                <input className="login-input-password"  
                                type="password" id="password" 
                                name="password" placeholder="Password" 
                                required></input>
                <button className="login-button" type="submit">Login</button>
                <p>Create an <Link href="/SignUp"> account</Link>?</p>
        </form> 
    )
}