// Core
import { Tabs } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useNavigate } from 'react-router-dom';

// Components
import AuthForm from './authForm/AuthForm';

// Assets
import logo from '../../assets/icons/logo.svg';

// Styles
import styles from './styles.module.css';

const { TabPane } = Tabs;

const AuthPage = () => {
  const navigate = useNavigate();
  const submit = (email: string, password: string) => {
    console.log(email, password);
    navigate('/');
  };

  return (
    <Content className={styles.container}>
      <img src={logo} className={styles.logo} width="320px" height="200px" alt="Логотип: текст encrypt" />

      <Tabs defaultActiveKey="1" className={styles.tabs}>
        <TabPane tab="Войти" key="1">
          <AuthForm buttonTitle="Войти" submitHandler={submit} />
        </TabPane>
        <TabPane tab="Зарегистрироваться" key="2">
          <AuthForm buttonTitle="Зарегистрироваться" submitHandler={submit} />
        </TabPane>
      </Tabs>
    </Content>
  );
};
export default AuthPage;
