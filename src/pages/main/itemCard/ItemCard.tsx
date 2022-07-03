// Core
import { FC } from 'react';
import { Card } from 'antd';

// Components
import ExtraMenu from './extraMenu/ExtraMenu';

// Styles
import styles from './styles.module.css';

type PropsType = {
  id: string;
  title: string;
  login: string;
  password: string;
  url?: string;
  showEditModal: () => void;
  deleteCard: (id: string) => void;
  findAccount: (id: string) => void;
};

const ItemCard: FC<PropsType> = ({ id, title, login, password, url, showEditModal, deleteCard, findAccount }) => {
  return (
    <Card
      className={styles.container}
      type="inner"
      title={title}
      extra={
        <ExtraMenu id={id} deleteCardHandler={deleteCard} showEditHandler={showEditModal} findAccount={findAccount} />
      }
    >
      login: {login}
      <br />
      password: {password}
      <br />
      {url && `url: ${url}`}
    </Card>
  );
};

export default ItemCard;
