// Core
import { FC } from 'react';
import { Card } from 'antd';

// Components
import ExtraMenu from './extraMenu/ExtraMenu';

// Styles
import styles from './styles.module.css';

type PropsType = {
  title: string;
  login: string;
  password: string;
  url: string;
  showEditModal: () => void;
};

const ItemCard: FC<PropsType> = ({ title, login, password, url, showEditModal }) => {
  return (
    <Card className={styles.container} type="inner" title={title} extra={<ExtraMenu showEditHandler={showEditModal} />}>
      login: {login}
      <br />
      password: {password}
      <br />
      url: {url}
    </Card>
  );
};

export default ItemCard;
