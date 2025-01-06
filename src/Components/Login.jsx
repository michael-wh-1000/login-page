import logo from '../assets/images/google-icon.svg'
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    return (
        <div className="create-account">
        <div className="content">
        <div className="heading">Sign in</div>
        <div className="subheading">Do not have account? <Link to="/" className='login-link'>Create account</Link></div>
         <form className="account-form" action="">
             <label>Email</label>
             <input type="email" id="email-adress" className= "text-input" placeholder="Email"/>
             <label>Password</label>
             <input type="password" id="password" className= "text-input" placeholder="Password"/>
             <button type="submit" className="submit-button">Sign in</button>
             <button className='google-login'>
                 <img src={logo} />
                 <p>Sign in with google</p>
             </button>
         </form>
        </div>
     </div>
    );
}