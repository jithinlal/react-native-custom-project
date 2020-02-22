import React from 'react';
import {View, StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import {Card, Button, Input, Icon, withTheme} from 'react-native-elements';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';

import {Typography, Colors} from '~/styles';
import loginValidationSchema from '~/utils/login.validation';

const AuthScreen = props => {
  // const {theme} = props;

  props.navigation.setOptions({
    // headerStyle: {
    //   backgroundColor:
    //     Platform.OS === 'android' ? theme.colors.primary : 'white',
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : theme.colors.primary,
    // title: 'LOGIN',
    headerShown: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={10}
      style={styles.screen}>
      <LinearGradient
        colors={[Colors.PRIMARY, Colors.SECONDARY]}
        style={styles.gradientContainer}>
        <Card title="Login" containerStyle={styles.cardContainer}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              console.log(values);
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
                        name={
                          Platform.OS === 'android'
                            ? 'md-contact'
                            : 'ios-contact'
                        }
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
                        name={
                          Platform.OS === 'android' ? 'md-lock' : 'ios-lock'
                        }
                      />
                    }
                    leftIconContainerStyle={styles.iconContainer}
                  />
                </View>
                <View>
                  <Button
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
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '80%',
    padding: 20,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  iconContainer: {marginRight: 10},
  text: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

export default withTheme(AuthScreen);
