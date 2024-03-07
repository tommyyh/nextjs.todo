'use client';

import { Link } from '@/navigation';
import { toggleCompleted } from '@/server/api/task';
import React from 'react';
import style from './task.module.scss';

interface PropsInterface {
  task: {
    id: string;
    slug: string;
    task: string;
    completed: boolean;
    userID: string;
  };
}

const Task = (task: PropsInterface) => {
  const {
    task: { task: taskContent, slug, completed, id },
  } = task;

  return (
    <li style={{ listStyleType: 'none' }} className={style.item}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name="completed"
          defaultChecked={completed}
          onChange={(e) => toggleCompleted(id, e.target.checked)}
          id={id}
        />
        <span>{taskContent}</span>
      </label>

      <Link href={`/task/${slug}`}>Visit task</Link>
    </li>
  );
};

export default Task;
