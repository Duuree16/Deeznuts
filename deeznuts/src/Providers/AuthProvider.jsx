import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Components/Auth";
import axios from "axios";
import { useEffect } from "react";
export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [userId, setUserId] = useState("");
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserId(uid);
        axios
          .get("https://goy-tea.onrender.com/user/" + uid)
          .then((response) => {
            setAuthUser(response.data);
          });
      } else {
        console.log("no account found ");
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        authUser,
        setAuthUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
