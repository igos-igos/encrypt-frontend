// Core
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Tabs } from 'antd';
import { Content } from 'antd/lib/layout/layout';

// Stores
import authStore from '@/domain/stores/auth.store';

// Components
import AuthForm from './authForm/AuthForm';

// Assets
import logo from '@/presentation/assets/icons/logo.svg';

// Styles
import styles from './styles.module.css';

const { TabPane } = Tabs;

const AuthPage = () => {
  const { register: registration, login } = authStore;
  const [activeTab, setActiveTab] = useState('1');

  const register = async (email: string, password: string) => {
    const isRegistrationSuccess = await registration(email, password);
    if (isRegistrationSuccess) {
      setActiveTab('1');
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
