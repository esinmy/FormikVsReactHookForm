const MyReactHookInput = ({ register, label, name, errors, ...props }) => {
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...register(name)} />
      {errors && errors[name] ? (
        <div style={{ color: 'red' }}>{errors[name]['message']}</div>
      ) : null}
    </>
  );
};

export default MyReactHookInput;
