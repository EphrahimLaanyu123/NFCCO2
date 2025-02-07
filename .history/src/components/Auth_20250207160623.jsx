import {auth} from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";

const Auth = () => {
    const signIn = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.error(err);
        }
      };
    return (
        <div>
            <input placeholder="Email..." />
            <input placeholder="Password..." />
            <button > Sign In</button>
        </div>
    )
}

export default Auth;