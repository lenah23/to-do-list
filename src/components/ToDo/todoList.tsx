import { TodoItem } from '../index';
import styles from './todo.module.scss';

const TodoList: React.FC = () => {
  return (
    <div className={styles['todo-list']}>
      <TodoItem
        completed={true}
        todoLabel='Тестовое задание'
        onClick={() => console.log('')}
      />
      <TodoItem
        completed={false}
        todoLabel='Тестовое задание'
        onClick={() => console.log('')}
      />
      <TodoItem
        completed={true}
        todoLabel='Тестовое задание'
        onClick={() => console.log('')}
      />
    </div>
  );
};

export default TodoList;
