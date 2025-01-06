import logo from '../assets/images/google-icon.svg'
import { Link } from 'react-router-dom';

export const CreateAccount = () => {
    return (
        <div className="create-account">
           <div className="content">
           <div className="heading">Create Account</div>
           <div className="subheading">Already have an account? <Link to="/login" className='login-link'>Sign in</Link></div>
            <form className="account-form" action="">
                <label>Full name</label>
                <input type="text" id="full-name" className= "text-input" placeholder="Enter name"/>
                <label>Email</label>
                <input type="email" id="email-adress" className= "text-input" placeholder="Email"/>
                <label>Password</label>
                <input type="password" id="password" className= "text-input" placeholder="Password"/>
                <button type="submit" className="submit-button">Create Account</button>
                <button className='google-login'>
                    <img src={logo} />
                    <p>Sign up with google</p>
                </button>
            </form>
           </div>
        </div>
    );
}