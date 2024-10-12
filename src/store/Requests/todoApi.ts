import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodoList } from '../../interfaces';

export const todosApi = createApi({
  reducerPath: 'patientsApi',
  tagTypes: ['todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getTodosList: builder.query<ITodoList, void>({
      query() {
        return {
          url: `/todos`,
          method: 'GET',
        };
      },
      providesTags: ['todos'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, completed, title }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: { id: id, title: title, completed: completed },
      }),
      invalidatesTags: ['todos'],
    }),
    createNewTodo: builder.mutation({
      query: ({ id, completed, title }) => ({
        url: `/todos`,
        method: 'POST',
        body: { id: id, title: title, completed: completed },
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const { useGetTodosListQuery, useUpdateTodoMutation, useCreateNewTodoMutation } = todosApi;
