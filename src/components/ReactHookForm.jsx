import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yupValidationSchema from '../yup_validation_schema/validation_schema';

import MyReactHookInput from './inputs/ReactHookInput';

import '../styles/form.css';

export default function ReactHookForm() {
  const { register, handleSubmit, formState, ...props } = useForm({
    mode: 'all',
    resolver: yupResolver(yupValidationSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <MyReactHookInput
        label="First Name"
        name="firstName"
        register={register}
        errors={formState.errors}
      />
      <MyReactHookInput label="Email" name="email" register={register} errors={formState.errors} />
      <input type="submit" />
    </form>
  );
}
