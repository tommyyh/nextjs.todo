import { prisma } from '@/database';
import { Link } from '@/navigation';
import React from 'react';

type PropsType = {
  params: {
    id: string;
  };
};

const User = async ({ params: { id } }: PropsType) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  const tasks = await prisma.task.findMany({
    where: {
      userID: user?.id,
    },
  });

  return (
    <div>
      <h1>User: {user?.email}</h1>
      <h6>ID: {user?.id}</h6>
      <Link href={'/user'}>Go back</Link>

      <br />

      <ul>
        {tasks.map((task) => (
          <li>
            <Link href={`/task/${task.slug}`}>{task.task}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
