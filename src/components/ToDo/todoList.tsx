import { ITodoItem, statusesEnum } from '../../interfaces';
import { TodoItem } from '../index';
import styles from './todo.module.scss';

interface IProps {
  todoList: any;
  updateTodoStatusReq: any;
  activeStatus: statusesEnum
}

const TodoList: React.FC<IProps> = (props) => {

  const filterMap = {
    [statusesEnum.ALL]: () => true, // Show all todos
    [statusesEnum.COMPLETED]: (item: ITodoItem) => item.completed, // Show only completed todos
    [statusesEnum.ACTIVE]: (item: ITodoItem) => !item.completed, // Show only active (pending) todos
  };
  return (
    <div className={styles['todo-list']}>
      {/* {props?.todoList?.map((item: ITodoItem) => {
        return (
          <TodoItem
            completed={item?.completed}
            todoLabel={item?.title}
            onClick={() =>
              props.updateTodoStatusReq({
                id: item?.id,
                completed: !item?.completed,
                title: item?.title,
              })
            }
            key={item?.id}
          />
        );
      })} */}
      {props?.todoList
        ?.filter(filterMap[props.activeStatus]) // Use the mapping object to filter
        .map((item: ITodoItem) => (
          <TodoItem
            completed={item?.completed}
            todoLabel={item?.title}
            onClick={() =>
              props.updateTodoStatusReq({
                id: item?.id,
                completed: !item?.completed, // Toggle the completed status
                title: item?.title,
              })
            }
            key={item?.id}
          />
        ))}
    </div>
  );
};

export default TodoList;
