// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

// Layouts
import MainLayout from '../layouts/Main/Main.layout';

// Pages
import MainPage from '../pages/main/Main.page';
import AuthPage from '../pages/auth/Auth.page';
import NotFoundPage from '../pages/404.page';

const Routing = () => {
  return (
    <ConfigProvider locale={ruRu}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default Routing;
