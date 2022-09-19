import React from 'react';
import { useField } from 'formik';

interface IProps {
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput = ({ ...props }: IProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error p-text' : 'p-text'}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
