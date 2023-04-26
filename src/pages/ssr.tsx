import { TodoService } from 'modules/todos/services';
import { type Todo } from 'modules/todos/types';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const todos = await TodoService.list(params);

  return {
    props: {
      todos,
    },
  };
};

const SSRPage = ({ todos }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <React.Fragment>
      <h1>SSR Page</h1>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SSRPage;
