import React from 'react';
import Form from '../Form/Form';
import { prisma } from '@/database';
import Task from '../Task/Task';
import Filter from '../Filter/Filter';

const Landing = async () => {
  let tasks = [];

  tasks = await prisma.task.findMany();

  return (
    <section>
      <Form />
      <Filter />

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};

export default Landing;
