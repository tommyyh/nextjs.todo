import React from 'react';
import Form from '../Form/Form';
import { prisma } from '@/database';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';

const Landing = async () => {
  const users = await prisma.user.findMany();
  const l = await getTranslations('User');

  return (
    <section>
      <h1>{l('register.title')}</h1>

      <Form />

      <ul>
        {users.map((user) => (
          <div>
            <li key={user.id}>{user.email}</li>
            <Link href={`/user/${user.id}`}>Visit user</Link>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Landing;
