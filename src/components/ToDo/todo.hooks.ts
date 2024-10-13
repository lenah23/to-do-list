import { useEffect, useState } from 'react';
import {
  useCreateNewTodoMutation,
  useDeleteCompletedTodosMutation,
  useGetTodosListQuery,
  useUpdateTodoMutation,
} from '../../store/Requests/todoApi';
import { IStatusesList, statusesEnum } from '../../interfaces';

const UseTodoHooks = () => {
  const statusesList: IStatusesList[] = [
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

  // requests
  const { data: todoList } = useGetTodosListQuery();
  const [updateTodoStatusReq] = useUpdateTodoMutation();
  const [createTodoReq] = useCreateNewTodoMutation();
  const [clearCompletedTodods] = useDeleteCompletedTodosMutation();

  // states
  const [itemsLeft, setItemsLeft] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [activeStatus, setActiveStatus] = useState<statusesEnum>(
    statusesEnum.ALL
  );

  // useEffects
  useEffect(() => {
    if (todoList) {
      setItemsLeft(
        todoList?.filter((item) => item?.completed === false)?.length
      );
    }
  }, [todoList]);

  // functions
  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim()) {
        try {
          await createTodoReq({
            title: inputValue,
            completed: false,
          }).unwrap();
          setInputValue('');
        } catch (error) {
          console.error('Failed to create todo:', error);
        }
      }
    }
  };

  const handleClearCompletedTodos = async () => {
    await clearCompletedTodods();
  };

  return {
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
  };
};

export default UseTodoHooks;
