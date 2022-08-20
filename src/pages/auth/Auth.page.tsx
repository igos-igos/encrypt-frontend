// Core
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Tabs } from 'antd';
import { Content } from 'antd/lib/layout/layout';

// Stores
import authStore from '../../stores/auth.store';

// Components
import AuthForm from './authForm/AuthForm';

// Assets
import logo from '../../assets/icons/logo.svg';

// Styles
import styles from './styles.module.css';

const { TabPane } = Tabs;

const AuthPage = () => {
  const { register: registration, login: log, token } = authStore;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('1');

  const register = async (email: string, password: string) => {
    const isRegistrationSuccess = await registration(email, password);
    if (isRegistrationSuccess) {
      setActiveTab('1');
    }
  };

  const login = async (email: string, password: string) => {
    await log(email, password);
    if (token) {
      navigate('/');
    }
  };

  return (
    <Content className={styles.container}>
      <img src={logo} className={styles.logo} width="320px" height="200px" alt="Логотип: текст encrypt" />

      <Tabs defaultActiveKey="1" activeKey={activeTab} className={styles.tabs} onTabClick={(tab) => setActiveTab(tab)}>
        <TabPane tab="Войти" key="1">
          <AuthForm buttonTitle="Войти" submitHandler={login} />
        </TabPane>
        <TabPane tab="Зарегистрироваться" key="2">
          <AuthForm buttonTitle="Зарегистрироваться" submitHandler={register} />
        </TabPane>
      </Tabs>
    </Content>
  );
};
export default observer(AuthPage);
