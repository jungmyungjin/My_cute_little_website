import React, { useEffect, useState } from "react";
import SayHi from "../SayHi/SayHi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchKR, fetchUS, fetchJP, fetchCN } from "../../services/index";

function SayHiLang({ fetchApi }) {
  const [greeting, setGreeting] = useState("hoho");

  useEffect(() => {
    const load = async () => {
      const data = await fetchApi();
      if (!data) {
        setGreeting("🔌서버 연결중...");
      } else {
        setGreeting(data);
      }
    };
    load();
  }, [fetchApi]);

  return <SayHi greeting={greeting} />;
}

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SayHiLang fetchApi={fetchKR} />} />
          <Route path="/lang">
            <Route path="/lang/KR" element={<SayHiLang fetchApi={fetchKR} />} />
            <Route path="/lang/US" element={<SayHiLang fetchApi={fetchUS} />} />
            <Route path="/lang/JP" element={<SayHiLang fetchApi={fetchJP} />} />
            <Route path="/lang/CN" element={<SayHiLang fetchApi={fetchCN} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
