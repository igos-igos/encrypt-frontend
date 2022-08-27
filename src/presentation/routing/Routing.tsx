// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';

// Stores
import authStore from '@/domain/stores/auth.store';

// Layouts
import MainLayout from '../layouts/Main/Main.layout';

// Pages
import MainPage from '../pages/main/Main.page';
import AuthPage from '../pages/auth/Auth.page';
import NotFoundPage from '../pages/404.page';

// Components
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import SkipAuthRoute from './SkipAuthRoute/SkipAuthRoute';

const Routing = () => {
  const { token } = authStore;

  return (
    <ConfigProvider locale={ruRu}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={Boolean(token)} />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
            </Route>
          </Route>
          <Route element={<SkipAuthRoute isAuthenticated={!Boolean(token)} />}>
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default observer(Routing);
