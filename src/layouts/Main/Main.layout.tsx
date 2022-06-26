// Core
import { Link, Outlet } from 'react-router-dom';
import { Avatar } from 'antd';
import Layout, { Header } from 'antd/lib/layout/layout';
import { UserOutlined } from '@ant-design/icons';

// Assets
import logo from '../../assets/icons/logo-simple.svg';

// Styles
import styles from './styles.module.css';

const MainLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <img src={logo} className={styles.logo} width="100px" height="60px" alt="Логотип: текст encrypt" />
        <div>
          <Avatar className={styles.avatar} icon={<UserOutlined />} />
          {/* TODO: переделать на ссылку в профиль */}
          <Link className={styles.link} to="auth">
            Профиль
          </Link>
        </div>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
