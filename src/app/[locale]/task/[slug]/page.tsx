import { prisma } from '@/database';
import { Link } from '@/navigation';
import React from 'react';
import Delete from './Delete';

type PropsType = {
  params: {
    slug: string;
  };
};

type TaskType = {
  completed: boolean;
  id: string;
  slug: string;
  task: string;
  userID: string;
};

const Task = async ({ params }: PropsType) => {
  const { slug } = params;
  const task: TaskType | null = await prisma.task.findUnique({
    where: { slug },
  });

  if (!task?.id) return <h1>No task with this slug</h1>;

  return (
    <main>
      <h1>{task.task}</h1>
      <h5>Completed: {task.completed.toString()}</h5>
      <br />

      <Delete />

      <div style={{ margin: '5rem 0 0 0' }}>
        <Link href={'/'}>Go back</Link>
      </div>
    </main>
  );
};

export default Task;
