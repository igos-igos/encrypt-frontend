// Core
import { FC } from 'react';
import { Button, Form, Modal } from 'antd';

// Components
import ModalForm from './modalForm/ModalForm';

type PropsType = {
  title: string;
  visible: boolean;
  cancelHandler: () => void;
  isEdit?: boolean;
};

const ModalWithForm: FC<PropsType> = ({ title, visible, cancelHandler, isEdit = false }) => {
  const [form] = Form.useForm();

  const onCancelHandler = () => {
    if (!isEdit) {
      form.resetFields();
    }
    cancelHandler();
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => {}}
      onCancel={onCancelHandler}
      footer={[
        <Button key="1" form="modal-form" type="primary" htmlType="submit">
          Сохранить
        </Button>,
      ]}
    >
      <ModalForm form={form} />
    </Modal>
  );
};

export default ModalWithForm;
