import { Todos } from 'modules/todos';
import { TodoService } from 'modules/todos/services';
import { type Todo } from 'modules/todos/types';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const todos = await TodoService.list(params);

  return {
    props: { todos }, // todos object will be pass as props in the component.
  };
};

const TodosPage = ({ todos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <h1>ISR Page</h1>

      <Todos todos={todos} />
    </React.Fragment>
  );
};

export default TodosPage;
