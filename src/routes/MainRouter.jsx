import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
