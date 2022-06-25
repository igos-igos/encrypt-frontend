// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import MainPage from '../pages/Main.page';
import AuthPage from '../pages/Auth.page';
import NotFoundPage from '../pages/404.page';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
