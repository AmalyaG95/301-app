import styles from './style.module.scss';
import useScreenWidth from '@/hooks/useScreenWidth';

const WriteUsForm = () => {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 600;

  return (
    <form className={styles.container}>
      <div>
        <p>
          {isMobile && <label htmlFor="name">Имя</label>}
          <input type="text" id="name" placeholder="Ваша имя" />
        </p>

        <p>
          {isMobile && <label htmlFor="email">Эл. почта</label>}

          <input type="text" id="email" placeholder="Ваша почта" />
        </p>
      </div>

      <p>
        {isMobile && <label htmlFor="message">Сообщение</label>}

        <textarea id="message" placeholder="Написать" rows={4} />
      </p>
    </form>
  );
};

export default WriteUsForm;
