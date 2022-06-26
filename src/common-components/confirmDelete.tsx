// Core
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

type PropsType = {
  okHandler: () => void;
  title: string;
};

const showDeleteConfirm = ({ okHandler, title }: PropsType) => {
  confirm({
    title,
    icon: <ExclamationCircleOutlined />,
    okText: 'Да',
    okType: 'danger',
    cancelText: 'Нет',
    onOk() {
      okHandler();
    },
  });
};

export default showDeleteConfirm;
