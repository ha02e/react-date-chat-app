import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import PartnerInfo from "./pages/PartnerInfo";
import Chat from "./pages/Chat";

function App() {
  const history = useNavigate();

  const goUserInfo = () => {
    history("/user-info");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/partner-info" element={<PartnerInfo />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
