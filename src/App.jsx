import "./App.css";
import DefaultLayout from "./layouts/defaultLayout/DefaultLayout";
import GuestLayout from "./layouts/guestLayout/GuestLayout";
// pages
import { Home, About } from "./pages/index";

import { Route, Routes } from "react-router-dom";

function App() {
  const token = null;
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <DefaultLayout /> : <GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
