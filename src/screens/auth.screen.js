import React, {useState} from 'react';
import {StyleSheet, Platform, View, KeyboardAvoidingView} from 'react-native';
import {withTheme, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import {Typography, Colors} from '~/styles';
import * as authActions from '~/store/actions/auth.actions';

import LoginCard from '~/component/login-card';
import RegisterCard from '~/component/register-card';

const AuthScreen = props => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
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

  const authFormHandler = async values => {
    try {
      if (isLogin) {
        dispatch(authActions.login(values));
      } else {
        dispatch(authActions.signup(values));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={10}
      style={styles.screen}>
      <LinearGradient
        colors={[Colors.PRIMARY, Colors.SECONDARY]}
        style={styles.gradientContainer}>
        {isLogin ? (
          <LoginCard
            onSubmit={values => {
              authFormHandler(values);
            }}
          />
        ) : (
          <RegisterCard
            onSubmit={values => {
              authFormHandler(values);
            }}
          />
        )}
        <View>
          <Button
            type="clear"
            title={
              !isLogin
                ? 'Already a user? Please login'
                : 'New here? Please Register'
            }
            onPress={() => {
              setIsLogin(state => !state);
            }}
            titleStyle={styles.textSwitchStyle}
          />
        </View>
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
  textSwitchStyle: {
    color: Colors.WHITE,
  },
});

export default withTheme(AuthScreen);
