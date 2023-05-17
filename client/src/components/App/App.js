import React from "react";
import SayHi from "../SayHi/SayHi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<SayHi greeting="Hi" />} />
          <Route path="/lang/KR" element={<SayHi greeting="안녕" />} />
          <Route path="/lang/US" element={<SayHi greeting="Hi" />} />
          <Route path="/lang/JP" element={<SayHi greeting="こんにちは" />} />
          <Route path="/lang/CN" element={<SayHi greeting="你好" />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
