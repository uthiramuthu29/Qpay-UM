import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ManageQR from "./pages/ManageQR";
import Profile from "./pages/Profile";
import SettleNow from "./pages/SettleNow";
import { TransactionProvider } from "./context/TransactionProvider";

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-qr" element={<ManageQR />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settle-now" element={<SettleNow />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
