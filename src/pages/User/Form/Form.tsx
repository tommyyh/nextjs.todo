'use client';
import React, { useEffect, useRef } from 'react';
import style from './form.module.scss';
import { register } from '@/server/api/user';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  success: false,
  reload: 0,
  reset: false,
};

const Form = () => {
  const [state, formAction] = useFormState(register, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.reset) formRef.current?.reset();
  }, [state.reload]);

  return (
    <form action={formAction} ref={formRef}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Passowrd" />

      <button type="submit">Register</button>

      <p className={state.success ? style.success : style.error}>
        {state?.message}
      </p>
    </form>
  );
};

export default Form;
