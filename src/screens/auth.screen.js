import React, {useState} from 'react';
import {StyleSheet, Platform, View, KeyboardAvoidingView} from 'react-native';
import {withTheme, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-root-toast';

import {Typography, Colors} from '~/styles';
import * as authActions from '~/store/actions/auth.actions';

import LoginCard from '~/components/login-card';
import RegisterCard from '~/components/register-card';

const AuthScreen = props => {
  const dispatch = useDispatch();

  const authFormHandler = async (values, actions) => {
    try {
      if (isLogin) {
        await dispatch(authActions.login(values));
      } else {
        await dispatch(authActions.signup(values));
      }
    } catch (error) {
      Toast.show(error, {
        backgroundColor: Colors.ERROR,
        textColor: Colors.WHITE,
      });
      actions.setSubmitting(false);
    }
  };

  const [isLogin, setIsLogin] = useState(true);
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
        {isLogin ? (
          <LoginCard onFormSubmit={authFormHandler} />
        ) : (
          <RegisterCard onFormSubmit={authFormHandler} />
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
