// Core
import { FC } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Components
import showDeleteConfirm from '../../../../common-components/confirmDelete';

// Styles
import styles from './styles.module.css';

type PropsType = {
  showEditHandler: () => void;
};

const NestedMenu: FC<PropsType> = ({ showEditHandler }) => {
  return (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Button type="link" onClick={showEditHandler}>
              Редактировать
            </Button>
          ),
        },
        {
          key: '2',
          danger: true,
          label: (
            <Button
              type="link"
              className={styles.danger}
              danger
              onClick={() => showDeleteConfirm({ okHandler: () => {}, title: 'Удалить запись?' })}
            >
              Удалить
            </Button>
          ),
        },
      ]}
    />
  );
};

const ExtraMenu: FC<PropsType> = ({ showEditHandler }) => {
  return (
    <Dropdown overlay={<NestedMenu showEditHandler={showEditHandler} />}>
      <Button type="link">
        <DownOutlined className={styles.button} />
      </Button>
    </Dropdown>
  );
};

export default ExtraMenu;
