import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import VideoBackGround from "./components/VideoBackGround";
import GreetingLanding from "./components/GreetingLanding";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FormSignIn from "./components/Forms/FormSignIn";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GreetingLanding />
      <FormSignIn />  

      <Routes>
        <Route path="/" element={<VideoBackGround />} />
        <Route path="/signin" element={<FormSignIn />} />
     
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
