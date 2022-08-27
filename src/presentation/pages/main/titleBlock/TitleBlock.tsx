// Core
import { FC } from 'react';
import { Button, Space, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// Styles
import styles from './styles.module.css';

const { Title } = Typography;

type PropsType = {
  handler: () => void;
};

const TitleBlock: FC<PropsType> = ({ handler }) => {
  return (
    <Space>
      <Title className={styles.container} level={2}>
        Список аккаунтов
      </Title>

      <Button shape="circle" size="small" icon={<PlusOutlined />} onClick={handler} />
    </Space>
  );
};

export default TitleBlock;
