import { Routes, Route, useLocation } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginUser from "./pages/Login/LoginUser";
import Login2 from "./pages/Login/Login2";
import SignIn from "./pages/Login/SignIn";
import Registr from "./pages/Registr/Registr";
import DataBase from "./pages/AdminPanel/DataBase";
import Content from "./pages/AdminPanel/Content/";
import Managers from "./pages/AdminPanel/Managers/";
import ReviewsAndBlogs from "./pages/AdminPanel/ReviewsAndBlogs";
import Dashboard from "./pages/AdminPanel/Dashboard/DashBoard";
import Navbar from "./components/Navbar/Navbar";
import Sightseeing from "./pages/Sightseeing";
import Stay from "./pages/Stay";
import Events from "./pages/Events";
import Eat from "./pages/Eat";
import Blogs from "./pages/Blogs";
import Detail from "./pages/DetailPage";
import Gorges from "./pages/Gorges";
import Hiking from "./pages/Hiking";
import Waterfall from "./pages/WaterFall";
import Mountains from "./pages/Mountains";
import Alpinism from "./pages/Alpinism";
import Lakes from "./pages/Lakes";
import { Calendar} from './pages/Calendar';
import { today, getLocalTimeZone } from "@internationalized/date";


const PATHES = {
  "/admin": 1,
  "/database": 1,
  "/content": 1,
  "/managers": 1,
};

function App() {
  let location = useLocation();
  return (
    <>
      {!PATHES[location.pathname] && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/reg" element={<Registr />} />
        <Route path="/events" element={<Events />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/database" element={<DataBase />} />
        <Route path="/content" element={<Content />} />
        <Route path="/managers" element={<Managers />} />
        <Route path="/reviewsandblogs" element={<ReviewsAndBlogs />} />
        <Route path="/sightseeing" element={<Sightseeing />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/details_sulaiman__too" element={<Detail/>} />
        <Route path="/gorges" element={<Gorges/>} />
        <Route path="/hiking" element={<Hiking/>} />
        <Route path='/waterfall' element={<Waterfall/>}/>
        <Route path='/mountains' element={<Mountains/>} />
        <Route path='/alpinism' element={<Alpinism/>} />
        <Route path='lakes' element={<Lakes/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path='/calendar' element={<Calendar defaultValue={today(getLocalTimeZone())}/>} />
      </Routes>
    </>
  );
}

export default App;
