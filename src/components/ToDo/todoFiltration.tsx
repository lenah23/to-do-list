import styles from './todo.module.scss';
import { IStatusesList, statusesEnum } from '../../interfaces';

interface IProps {
  itemsLeft: number | null;
  activeStatus: statusesEnum;
  setActiveStatus: (val: statusesEnum) => void;
  statusesList: IStatusesList[];
  handleClearCompletedTodos: any;
}

const TodoFiltration: React.FC<IProps> = (props) => {
  const {
    itemsLeft,
    activeStatus,
    setActiveStatus,
    statusesList,
    handleClearCompletedTodos,
  } = props;

  return (
    <div className={styles['todo-card__footer']}>
      <div className={styles['']}>
        {props?.itemsLeft} {props?.itemsLeft === 1 ? 'item' : 'items'} left
      </div>
      <div className={styles['statuses']}>
        {statusesList.map((item: { id: number; label: statusesEnum }) => {
          return (
            <span
              key={item?.id}
              onClick={() => setActiveStatus(item?.label)}
              className={
                item?.label === activeStatus
                  ? styles['active-status']
                  : styles['inactive-status']
              }
            >
              {item?.label}
            </span>
          );
        })}
      </div>
      <div className={styles['']} onClick={handleClearCompletedTodos}>
        clear completed
      </div>
    </div>
  );
};

export default TodoFiltration;
