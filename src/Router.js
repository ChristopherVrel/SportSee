import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Community from "./pages/Community/Community";
import Error from "./pages/Error/Error";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}
  
export default Router;