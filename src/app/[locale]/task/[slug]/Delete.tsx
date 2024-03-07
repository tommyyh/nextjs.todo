'use client';
import { deleteTask } from '@/server/api/task';
import { useParams } from 'next/navigation';
import React from 'react';

const Delete = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  if (!slug) return <h1>Loading...</h1>;

  return <button onClick={() => deleteTask(slug)}>Delete task</button>;
};

export default Delete;
