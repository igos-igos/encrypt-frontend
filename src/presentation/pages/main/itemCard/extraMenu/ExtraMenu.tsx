// Core
import { FC } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Components
import showDeleteConfirm from '../../../../common-components/confirmDelete';

// Styles
import styles from './styles.module.css';

type PropsType = {
  id: string;
  showEditHandler: () => void;
  deleteCardHandler: (id: string) => void;
  findAccount: (id: string) => void;
};

const NestedMenu: FC<PropsType> = ({ id, showEditHandler, deleteCardHandler, findAccount }) => {
  const editButtonHandler = () => {
    findAccount(id);
    showEditHandler();
  };

  return (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Button type="link" onClick={editButtonHandler}>
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
              onClick={() => showDeleteConfirm({ okHandler: () => deleteCardHandler(id), title: 'Удалить запись?' })}
            >
              Удалить
            </Button>
          ),
        },
      ]}
    />
  );
};

const ExtraMenu: FC<PropsType> = ({ id, showEditHandler, deleteCardHandler, findAccount }) => {
  return (
    <Dropdown
      overlay={
        <NestedMenu
          id={id}
          deleteCardHandler={deleteCardHandler}
          showEditHandler={showEditHandler}
          findAccount={findAccount}
        />
      }
    >
      <Button type="link">
        <DownOutlined className={styles.button} />
      </Button>
    </Dropdown>
  );
};

export default ExtraMenu;
