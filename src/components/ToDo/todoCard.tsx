import React from 'react';
import UseTodoHooks from './todo.hooks';
import { CustomInput, TodoList, TodoFiltration } from '../index';
import styles from './todo.module.scss';

const TodoCard: React.FC = () => {
  const {
    todoList,
    itemsLeft,
    inputValue,
    activeStatus,
    statusesList,
    setInputValue,
    handleKeyPress,
    setActiveStatus,
    updateTodoStatusReq,
    handleClearCompletedTodos,
  } = UseTodoHooks();

  return (
    <div className={styles['todo-card']}>
      <h3 className={styles['todo-card__heading']}>todos</h3>
      <div className={styles['todo-section']}>
        <CustomInput
          placeholder='What needs to be done?'
          onChange={(e: any) => setInputValue(e?.target?.value)}
          handleKeyPress={handleKeyPress}
          value={inputValue}
        />
        <TodoList
          todoList={todoList}
          updateTodoStatusReq={updateTodoStatusReq}
          activeStatus={activeStatus}
        />
        <TodoFiltration
          itemsLeft={itemsLeft}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          statusesList={statusesList}
          handleClearCompletedTodos={handleClearCompletedTodos}
        />
      </div>
    </div>
  );
};

export default TodoCard;
