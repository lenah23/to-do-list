import styles from './todo.module.scss';
import { IStatusesList, statusesEnum } from '../../interfaces';

interface IProps {
  itemsLeft: number | null;
  activeStatus: statusesEnum;
  setActiveStatus: (val: statusesEnum) => void;
  statusesList: IStatusesList[];
}

const TodoFiltration: React.FC<IProps> = (props) => {
  const { itemsLeft, activeStatus, setActiveStatus, statusesList } = props;

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
      <div className={styles['']}>clear completed</div>
    </div>
  );
};

export default TodoFiltration;
