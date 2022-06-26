// Core
import { Content } from 'antd/lib/layout/layout';

// Components
import TitleBlock from './titleBlock/TitleBlock';
import ItemCard from './itemCard/ItemCard';
import ModalWithForm from '../../common-components/modalWithForm/ModalWithForm';

// Hooks
import useModal from '../../hooks/useModal';

// Styles
import styles from './styles.module.css';

const MainPage = () => {
  const { visible, showModal, hideModal } = useModal();
  const { visible: visibleEdit, showModal: showEdit, hideModal: hideEdit } = useModal();

  return (
    <>
      <Content className={styles.container}>
        <TitleBlock handler={showModal} />

        <ItemCard title="Google" login="qwerty" password="123456" url="google.com" showEditModal={showEdit} />
      </Content>
      <ModalWithForm visible={visible} title="Создать запись" cancelHandler={hideModal} />
      <ModalWithForm visible={visibleEdit} title="Редактировать запись" cancelHandler={hideEdit} isEdit />
    </>
  );
};

export default MainPage;
