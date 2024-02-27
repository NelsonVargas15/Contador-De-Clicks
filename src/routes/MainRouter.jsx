import { Routes, Route, BrowserRouter } from "react-router-dom";
import FullLayout from "../components/full/FullLayout";
import Home from "../page/Home";
import AboutMe from "../page/AboutMe";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
