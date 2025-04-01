import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import UserAddList from "./pages/UserAddList";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/user-add-list" element={<UserAddList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}