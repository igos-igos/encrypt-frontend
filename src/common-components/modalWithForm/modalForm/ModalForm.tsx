// Core
import { FC } from 'react';
import { Button, Form, FormInstance, Input, Tooltip } from 'antd';
import { VerifiedOutlined } from '@ant-design/icons';

type PropsType = {
  form: FormInstance<any>;
};

const ModalForm: FC<PropsType> = ({ form }) => {
  return (
    <Form
      form={form}
      name="modal-form"
      initialValues={{ remember: true }}
      onFinish={(values: { title: string; login: string; password: string; url: string }) => console.log(values)}
      autoComplete="off"
    >
      <Form.Item required name="title" validateTrigger="onBlur" rules={[]}>
        <Input placeholder="Заголовок" />
      </Form.Item>

      <Form.Item required name="login" validateTrigger="onBlur" rules={[]}>
        <Input placeholder="Логин" />
      </Form.Item>

      <Form.Item required name="password" validateTrigger="onBlur" rules={[]}>
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 31px)' }} placeholder="Пароль" />
          <Tooltip title="Сгенерировать пароль">
            <Button icon={<VerifiedOutlined />} />
          </Tooltip>
        </Input.Group>
      </Form.Item>

      <Form.Item name="url" validateTrigger="onBlur" rules={[]}>
        <Input placeholder="Url" />
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
