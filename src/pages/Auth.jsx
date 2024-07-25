import {  signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../firebase/firebaseConfig';

const Auth = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Chat Room</h1>
      <p>Devam etmek icin giris yapiniz..</p>
      <button onClick={handleClick}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt=""
        />
        <span>Google ile Gir.</span>
      </button>
    </div>
  );
};

export default Auth;
