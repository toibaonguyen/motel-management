import Link from "next/link"
export default function SignUpForm(){
    return (
        <form className="signup-form">
            <h2 className="signup-label">Sign up</h2>
            
            <input className="signup-input-username" 
                            type="text" id="username" 
                            name="username" placeholder="Enter your Username" 
                            required></input>
                    
            <input className="signup-input-password"  
                        type="text" id="password" 
                        name="password" placeholder="Enter your Password" 
                        required></input>
            
            <input className="signup-input-first-name"  
                        type="text" id="password" 
                        name="password" placeholder="Enter your first name" 
                        required></input>


            <input className="signup-input-last-name"  
                                    type="text" id="password" 
                                    name="password" placeholder="Enter your last name" 
                                    required></input>

            <input className="signup-input-email"  
                                    type="text" id="password" 
                                    name="password" placeholder="Enter your Email" 
                                    required></input>
            
            <input className="signup-input-phone-number"  
                                    type="text" id="password" 
                                    name="password" placeholder="Enter your phone number" 
                                    required></input>
         
                <div class="gender-options">
                    <div className="delivery-option">
                        <input type="radio" 
                            name="gender-option"></input> 
                            Male   
                    </div>
                    <div className="gender-option">
                        <input type="radio" 
                            name="gender-option"></input> 
                            Female   
                    </div>
                </div>

            <button className="signup-button" type="submit">Submit</button>
            <p>Do you have an <Link href="/Login"> account</Link>?</p>
        </form> 
    )
}