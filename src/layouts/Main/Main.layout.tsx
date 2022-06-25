import Layout, { Header } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <h4>header</h4>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
