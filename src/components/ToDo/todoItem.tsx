import styles from './todo.module.scss';

interface IProps {
  todoLabel: string;
  completed: boolean;
  onClick: () => void;
}

const TodoItem: React.FC<IProps> = (props) => {
  const { todoLabel, completed, onClick } = props;

  return (
    <div className={styles['todo-item']} onClick={onClick}>
      <div className={styles['circle']}>
        {completed && <span>&#10003;</span>}
      </div>
      <span className={completed ? styles['completed-todo-label'] : undefined}>
        {todoLabel}
      </span>
    </div>
  );
};

export default TodoItem;
