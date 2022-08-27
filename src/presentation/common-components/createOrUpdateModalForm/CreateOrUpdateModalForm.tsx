// Core
import { FC, useEffect } from 'react';
import { Form, Input, Modal } from 'antd';

// Types

// Validations
import { loginValidation, passwordValidation, titleValidation, urlValidation } from './validations';
import { Account } from '@/domain/account/account.model';

type PropsType = {
  title: string;
  visible: boolean;
  hideModal: () => void;
  account?: Account | null;
  createOrUpdateHandler: (account: Account) => void;
};

const CreateOrUpdateModalForm: FC<PropsType> = ({ title, visible, hideModal, account, createOrUpdateHandler }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      title: account?.title,
      login: account?.login,
      password: account?.password,
      url: account?.url,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const okHandler = async () => {
    try {
      const values = await form.validateFields();
      if (!!account) {
        values.id = account.id;
      }
      createOrUpdateHandler(values);
      form.resetFields();
      hideModal();
    } catch (error) {} // Ошибки выводятся в интерфейсе, дополнительная обработка не нужна
  };

  const cancelHandler = () => {
    form.resetFields();
    hideModal();
  };

  return (
    <Modal
      forceRender
      visible={visible}
      title={title}
      okText="Сохранить"
      cancelText="Отменить"
      onCancel={cancelHandler}
      onOk={okHandler}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item required name="title" validateTrigger="onBlur" rules={titleValidation}>
          <Input placeholder="Заголовок" />
        </Form.Item>

        <Form.Item required name="login" validateTrigger="onBlur" rules={loginValidation}>
          <Input placeholder="Логин" />
        </Form.Item>

        <Form.Item required name="password" validateTrigger="onBlur" rules={passwordValidation}>
          <Input placeholder="Пароль" />
        </Form.Item>

        <Form.Item name="url" validateTrigger="onBlur" rules={urlValidation}>
          <Input placeholder="Url" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateOrUpdateModalForm;
