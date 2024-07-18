import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Service } from "./pages/Services/Service";
import { Header } from "./Components/Header/Header";
import { Room } from "./pages/Rooms/Room";
import { About } from "./pages/About/About";

import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rooms" Component={Room} />
          <Route path="/about" Component={About} />

          <Route path="/service" Component={Service} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
