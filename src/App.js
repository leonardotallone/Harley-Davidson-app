import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import VideoBackGround from "./components/VideoBackGround";
import GreetingLanding from "./components/GreetingLanding";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GreetingLanding />

      <Routes>
        <Route path="/" element={<VideoBackGround />} />
     
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
