import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FullLayout from '../components/full/FullLayout';
import Home from '../page/Home';



const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;