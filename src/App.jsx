import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  const handleLogout = () => {
    //kullancii oturumunu kapatiyor
    signOut(auth)
      .then((res) => setIsAuth(false))
      .catch((err) => console.log("hata", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };

  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }

  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom}/>
      ) : (
        <form onSubmit={handleSubmit} className="room-container">
          <h1>Chat Room</h1>
          <p>Hangi odaya gireceksiniz?</p>
          <input type="text" />
          <button type="sumbit">Odaya Gir</button>
          <button onClick={handleLogout} className="logout" type="button">
            Cikis Yap
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
