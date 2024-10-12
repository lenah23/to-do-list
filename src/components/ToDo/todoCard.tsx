import React from 'react';
import styles from './todo.module.scss';
import { CustomInput, TodoList, TodoFiltration } from '../index';

const TodoCard: React.FC = () => {
  return (
    <div className={styles['todo-card']}>
      <h3 className={styles['todo-card__heading']}>todos</h3>
      <div className={styles['todo-section']}>
        <CustomInput
          placeholder='What needs to be done?'
          onChange={() => console.log('')}
        />
        <TodoList />
        <TodoFiltration />
      </div>
    </div>
  );
};

export default TodoCard;
