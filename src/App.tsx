import "./App.css"
import UserProfile from "./component/UserProfile"
import { useState } from "react"
import UserContext from "./component/Usercontext"

function App() {

  const [ isOnline, setIsOnline ] = useState(false)

  return (
    <UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}>
       <UserProfile />
    </UserContext.Provider>
  )
}

export default App;