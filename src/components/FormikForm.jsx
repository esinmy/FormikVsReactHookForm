import React from 'react';
import { Formik, Form } from 'formik';

import yupValidationSchema from '../yup_validation_schema/validation_schema';

import FormikInput from './inputs/FormikInput';

import '../styles/form.css';

export default function FormikForm() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
        }}
        validationSchema={yupValidationSchema}
        onSubmit={(data) => alert(JSON.stringify(data, null, 1))}>
        <Form className="form">
          <FormikInput label="First Name" name="firstName" type="text" placeholder="Jane" />
          <FormikInput label="Email Address" name="email" placeholder="jane@formik.com" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
