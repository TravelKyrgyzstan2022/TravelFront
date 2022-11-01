import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginUser from "./pages/Login/LoginUser";
import Login2 from "./pages/Login/Login2";
import SignIn from "./pages/Login/SignIn";
import Registr from "./pages/Registr/Registr";
import Blogs from "./pages/Blogs/Blogs";
import Eat from "./pages/Eat/Eat";
import Enter from "./pages/Entertaiment/Enter";
import See from "./pages/SeeNTry/See";
import Stay from "./pages/Stay/Stay";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/reg" element={<Registr />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/see" element={<See />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
