import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Card, Button, Input, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import registerValidationSchema from '~/utils/register.validation';

const RegisterCard = ({onSubmit}) => {
  return (
    <Card title="SIGNUP" containerStyle={styles.cardContainer}>
      <Formik
        initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={values => {
          onSubmit(values);
        }}
        validationSchema={registerValidationSchema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Input
                name="name"
                value={values.name}
                placeholder="Enter Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                errorMessage={touched.name && errors.name}
                leftIcon={
                  <Icon
                    type="ionicon"
                    name={
                      Platform.OS === 'android' ? 'md-contact' : 'ios-contact'
                    }
                  />
                }
                leftIconContainerStyle={styles.iconContainer}
              />
              <Input
                name="email"
                value={values.email}
                placeholder="Enter email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errorMessage={touched.email && errors.email}
                leftIcon={
                  <Icon
                    type="ionicon"
                    name={Platform.OS === 'android' ? 'md-mail' : 'ios-mail'}
                  />
                }
                leftIconContainerStyle={styles.iconContainer}
              />
              <Input
                name="password"
                value={values.password}
                secureTextEntry
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorMessage={touched.password && errors.password}
                leftIcon={
                  <Icon
                    type="ionicon"
                    name={Platform.OS === 'android' ? 'md-key' : 'ios-key'}
                  />
                }
                leftIconContainerStyle={styles.iconContainer}
              />
              <Input
                name="confirmPassword"
                value={values.confirmPassword}
                secureTextEntry
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                errorMessage={touched.confirmPassword && errors.confirmPassword}
                leftIcon={
                  <Icon
                    type="ionicon"
                    name={Platform.OS === 'android' ? 'md-lock' : 'ios-lock'}
                  />
                }
                leftIconContainerStyle={styles.iconContainer}
              />
            </View>
            <View>
              <Button
                type="outline"
                onPress={handleSubmit}
                title="Register"
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </View>
          </>
        )}
      </Formik>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    padding: 20,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  iconContainer: {marginRight: 10},
});

export default RegisterCard;
