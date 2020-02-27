import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Card, Button, Input, Icon} from 'react-native-elements';
import {Formik} from 'formik';

import loginValidationSchema from '~/utils/login.validation';

const LoginCard = ({onFormSubmit}) => {
  return (
    <Card title="LOGIN" containerStyle={styles.cardContainer}>
      <Formik
        initialValues={{email: 'a@a.com', password: '123456'}}
        onSubmit={(values, actions) => {
          onFormSubmit(values, actions);
        }}
        validationSchema={loginValidationSchema}>
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
            </View>
            <View>
              <Button
                containerStyle={styles.loginBtnContainer}
                type="outline"
                onPress={handleSubmit}
                title="Login"
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
    borderRadius: 10,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  iconContainer: {marginRight: 10},
  loginBtnContainer: {
    borderRadius: 5,
  },
});

export default LoginCard;
