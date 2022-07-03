// Core
import { FC } from 'react';
import { Button, Form, Input } from 'antd';

// Validations
import { emailValidation, passwordValidation } from './validations';

// Styles
import styles from './styles.module.css';

type PropsType = {
  buttonTitle: string;
  submitHandler: (email: string, password: string) => void;
};

const AuthForm: FC<PropsType> = ({ buttonTitle, submitHandler }) => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(values: { email: string; password: string }) => submitHandler(values.email, values.password)}
      autoComplete="off"
    >
      <Form.Item name="email" validateTrigger="onBlur" rules={emailValidation}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name="password" validateTrigger="onBlur" rules={passwordValidation}>
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item>
        <Button className={styles.button} type="primary" htmlType="submit">
          {buttonTitle}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
