import { object, string } from 'yup';

export const RegisterValidation = object({
    fullname: string().min(2).required('Full Name is Required .'),
    username: string().required('Username is Required .'),
    email: string().email().required('Email is Required .'),
    password: string().required('Password is Required .'),
});


export const LoginValidation = object({
    email: string().required('E-mail or Username is required'),
    password: string().required('Password is Required'),
  });