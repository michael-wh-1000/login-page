import { Routes, Route } from 'react-router-dom';
import { CreateAccount } from './Components/CreateAccount.jsx';
import './CSS/login-page-css.css'
import { LoginForm } from './Components/Login.jsx';

export const LoginPage = () => {
    return (
        <>
        <div className="exterior-login-box">
            <div className="login-image"></div>
            <Routes>
                <Route path="/" element={<CreateAccount />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
        </div>
        </>
    );
}