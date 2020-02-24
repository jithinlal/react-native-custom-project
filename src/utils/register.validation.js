import * as Yup from 'yup';

const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Please enter a name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter an email!'),
  password: Yup.string()
    .label('Password')
    .required('Please enter a password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must match',
  ),
});

export default registerValidationSchema;
