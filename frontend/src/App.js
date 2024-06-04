import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import PartnerInfo from "./pages/PartnerInfo";
import Chat from "./pages/Chat";
import { useState } from "react";

function App() {
  // const history = useNavigate();

  // const goUserInfo = () => {
  //   history("/user-info");
  // };

  const [partnerInfo, setPartnerInfo] = useState();

  const handlePartnerInfo = (data) => {
    setPartnerInfo(data);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route
          path="/partner-info"
          element={<PartnerInfo handlePartnerInfo={handlePartnerInfo} />}
        />
        <Route path="/chat" element={<Chat partnerInfo={partnerInfo} />} />
      </Routes>
    </div>
  );
}

export default App;
