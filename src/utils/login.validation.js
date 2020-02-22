import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter an email!'),
  password: Yup.string()
    .label('Password')
    .required('Please enter a password'),
});

export default loginValidationSchema;
