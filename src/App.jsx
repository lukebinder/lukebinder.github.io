import "./App.scss";
import { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useIntersectionObserver from "./hooks/useIntersectionObserver.ts";
import Header from "./Components/Header";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import ContactModal from "./Components/ContactModal";
import Fade from "react-reveal/Fade";

const App = () => {
  const myRef = useRef();
  const onScreen = useIntersectionObserver(myRef, { threshold: 0.9 });
  const [navBkg, setNavBkg] = useState("transparent");
  const [openContactModel, setOpenContactModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setNavBkg(onScreen ? "transparent" : "black");
  }, [onScreen]);

  const handleToggleContactModal = (toggle) => {
    setOpenContactModal(() => (toggle === "open" ? true : false));
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header
            navBkg={navBkg}
            handleToggleContactModal={handleToggleContactModal}
          />
          <Routes>
            <Route path="/" element={<Home myRef={myRef} />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      {openContactModel && (
        <ContactModal handleToggleContactModal={handleToggleContactModal} />
      )}
    </>
  );
};

export default App;
