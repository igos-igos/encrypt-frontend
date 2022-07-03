// Core
import { useEffect } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { observer } from 'mobx-react-lite';

// Stores
import accountsStore from '../../stores/accounts.store';

// Components
import TitleBlock from './titleBlock/TitleBlock';
import ItemCard from './itemCard/ItemCard';
import CreateOrUpdateModalForm from '../../common-components/createOrUpdateModalForm/CreateOrUpdateModalForm';

// Hooks
import useModal from '../../hooks/useModal';

// Styles
import styles from './styles.module.css';

const MainPage = () => {
  const { accounts, fetchAccounts, deleteAccount, createAccount, updateAccount, findAccount, editableAccount } =
    accountsStore;
  const { visible, showModal, hideModal } = useModal();
  const { visible: visibleEdit, showModal: showEdit, hideModal: hideEdit } = useModal();

  useEffect(() => {
    fetchAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Content className={styles.container}>
        <TitleBlock handler={showModal} />
        {!!accounts.length &&
          accounts.map((item) => {
            const { id, title, login, password, url } = item;
            return (
              <ItemCard
                key={id}
                id={id}
                title={title}
                login={login}
                password={password}
                url={url}
                showEditModal={showEdit}
                deleteCard={deleteAccount}
                findAccount={findAccount}
              />
            );
          })}
      </Content>
      <CreateOrUpdateModalForm
        visible={visible}
        title="Создать запись"
        hideModal={hideModal}
        createOrUpdateHandler={createAccount}
      />
      <CreateOrUpdateModalForm
        visible={visibleEdit}
        title="Редактировать запись"
        hideModal={hideEdit}
        createOrUpdateHandler={updateAccount}
        account={editableAccount}
      />
    </>
  );
};

export default observer(MainPage);
