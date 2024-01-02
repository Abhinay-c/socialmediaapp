import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return (
        <div className="login">
            <h1>Login Page</h1>
            <p>Sign in with your Google account to continue</p>
            <button onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} />  Sign in</button>
        </div>
    );
};
