import React from "react";
import { useContext } from "react";
import UserContext from "./Usercontext";


function UserProfile() {
    const { isOnline, setIsOnline } = useContext(UserContext)

  return (
    <>
      <p>
         L'utilisateur est 
         {isOnline === false && " hors ligne"}
         {isOnline === true && " en ligne"}
      </p>

      <button
         onClick={() => setIsOnline(!isOnline)}>
             click to change user status 
      </button>
    </>
  );
}

export default UserProfile;