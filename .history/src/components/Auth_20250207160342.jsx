import {auth} from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";

const Auth = () => {
    return (
        <div>
            <input placeholder="Email..." />
            <input placeholder="Password..." />
            <button > Sign In</button>
        </div>
    )
}

export default Auth;