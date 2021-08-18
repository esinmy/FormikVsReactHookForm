import { useField } from 'formik';

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div style={{ color: 'red' }}>{meta.error}</div> : null}
    </>
  );
};

export default FormikInput;
