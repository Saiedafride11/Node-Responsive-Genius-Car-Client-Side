import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { SignInUsingGoogle} = useAuth();
    const location = useLocation();
    // console.log('Came from login', location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
          })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;