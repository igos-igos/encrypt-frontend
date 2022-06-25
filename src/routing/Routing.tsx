// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/Main/Main.layout';

// Pages
import MainPage from '../pages/Main.page';
import AuthPage from '../pages/auth/Auth.page';
import NotFoundPage from '../pages/404.page';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
