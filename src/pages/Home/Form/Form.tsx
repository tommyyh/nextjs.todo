'use client';
import { addTask } from '@/server/api/task';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

const initialState = {
  success: false,
};

const Form = () => {
  const [state, formAction] = useFormState(addTask, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form action={formAction} ref={formRef}>
      <input type="text" name="task" placeholder="Write new task" />

      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
