import { TodoService } from 'modules/todos/services';
import { type Todo } from 'modules/todos/types';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const todos = await TodoService.list(params);

  return {
    props: { todos }, // todos object will be pass as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

const SSGPage = ({ todos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <h1>SSG Page</h1>

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

export default SSGPage;
