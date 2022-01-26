import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';
import {Colors} from '../../constant/theme';
import {dash, loginscreen, phone, register1} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import axios from 'axios';
import CustomButton from '../../components/Button';
import TextField from '../../components/TextField';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeUser} from '../../store/actions/UserAction/UserAction';
import {post_request} from '../../services/makeRequest';

const ResetPasswordScreen = ({navigation, activeUser, route}) => {
  const [code, setCode] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(route.params.phoneNumber);

  console.log(phone);

  useEffect(() => {}, []);

  const onFocusHandler = arg => {
    setErrorMessage('');
    if (arg === 'code') {
      setCode('');
    }
    if (arg === 'pass1') {
      setPass1('');
    }
    if (arg === 'pass2') {
      setPass2('');
    }
  };

  const submitHandler = async () => {
    if (code === '') {
      setErrorMessage('Enter code');
      return;
    }
    if (pass1 === '') {
      setErrorMessage('Enter password');
      return;
    }
    if (pass2 === '') {
      setErrorMessage('Confirm password');
      return;
    }
    if (pass1 === pass2) {
      setLoading(true);
      try {
        const url = `/ResetPassword`;
        const payload = {
          phone: `234${Number(phone)}`,
          otp: code,
          password: pass1,
        };
        console.log(payload);
        const response = await post_request(url, payload);
        if (response.status === 200) {
          console.log('when success: ', response);
          navigation.navigate(loginscreen);
        } else if (response.status === 401) {
          setLoading(false);
          setErrorMessage('Access denied');
          console.log('when error: ', response);
        } else {
          setLoading(false);
          setErrorMessage('record not found');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrorMessage('Password does not match');
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.btns}>
          <View style={{width: '100%'}}>
            <Text style={styles.sectionTitle}>Reset Password</Text>
            <Text
              style={{
                width: '80%',
                paddingVertical: hp(4),
                lineHeight: hp(3.5),
              }}>
              Enter your reset code and new password to get access to your
              account
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              // padding: hp(2),
              elevation: 3,
            }}>
            <TextField
              label="Email Address"
              value={code}
              onChangeText={text => setCode(text)}
              placeholder="Enter Reset Code"
              // validated={isEmail}
              onFocus={() => onFocusHandler('code')}
              // onBlur={() => handleValidation('email')}
              secureTextEntry={false}
              iconName="lock-closed-outline"
            />
          </View>
          <View
            style={{
              width: '100%',
              // padding: hp(2),
              elevation: 3,
            }}>
            <TextField
              label="Email Address"
              value={pass1}
              onChangeText={text => setPass1(text)}
              placeholder="Enter New Password"
              // validated={isEmail}
              onFocus={() => onFocusHandler('pass1')}
              // onBlur={() => handleValidation('email')}
              secureTextEntry={true}
              iconName="lock-closed-outline"
            />
          </View>
          <View
            style={{
              width: '100%',
              // padding: hp(2),
              elevation: 3,
            }}>
            <TextField
              label="Password"
              value={pass2}
              onChangeText={text => setPass2(text)}
              placeholder="Confirm New Password"
              // validated={isPassword}
              onFocus={() => onFocusHandler('pass2')}
              // onBlur={() => handleValidation('password')}
              iconName="lock-closed-outline"
              secureTextEntry={true}
            />
          </View>
          <View>
            {errorMessage ? (
              <Text style={{color: Colors.primary}}>{errorMessage}</Text>
            ) : (
              <></>
            )}
          </View>
          <CustomButton
            title="Reset Password"
            bgColor={Colors.primary}
            txtColor={Colors.white}
            onPress={submitHandler}
            isLoading={loading}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const mapStateToProps = state => {
  return {
    currentLang: state.user.setLanguage,
  };
};
export default connect(mapStateToProps, {activeUser})(ResetPasswordScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(4),
  },
  topHalf: {
    flex: 1,
  },
  bottomHalf: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  btns: {
    marginTop: hp(2),
    padding: hp(2),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: hp(2),
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: rf(3),
  },
});
