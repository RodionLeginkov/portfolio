import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  userName: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Email is invalid')
    .required('Email is required'),
  message: yup
    .string(),
});
