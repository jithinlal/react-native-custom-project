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
    .required()
    .min(6, 'Password must be 6 characters in length'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

export default registerValidationSchema;
