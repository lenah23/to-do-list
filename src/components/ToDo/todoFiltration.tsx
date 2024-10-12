import { useState } from 'react';
import styles from './todo.module.scss';

enum statusesEnum {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

const TodoFiltration: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState<statusesEnum>(
    statusesEnum.ALL
  );

  const statusesList = [
    {
      id: 1,
      label: statusesEnum.ALL,
    },
    {
      id: 2,
      label: statusesEnum.ACTIVE,
    },
    {
      id: 3,
      label: statusesEnum.COMPLETED,
    },
  ];

  return (
    <div className={styles['todo-card__footer']}>
      <div className={styles['']}>2 items left</div>
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
