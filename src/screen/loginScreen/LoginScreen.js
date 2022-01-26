import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {MyText} from '../../components/MyText';
import {Colors} from '../../constant/theme';
import {dash, forgot, phone, register1} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import axios from 'axios';
import Axios from '../../utils/Axios';
import CustomButton from '../../components/Button';
import TextField from '../../components/TextField';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeUser} from '../../store/actions/UserAction/UserAction';
import {auth_request} from '../../services/authRequest';
import {get_request} from '../../services/makeRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation, activeUser}) => {
  const [email, setEmail] = useState('08093443109');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [rem, setRem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getPhoneNumber();
    });
    return unsubscribe;
  }, [navigation]);

  const getPhoneNumber = async () => {
    try {
      const number = await AsyncStorage.getItem('phone_num');

      if (number !== undefined) {
        setPhoneNumber(number);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleValidation = type => {
    if (type === 'password') {
      if (password.length > 3) {
        setIsPassword(true);
      } else {
        setErrorMessage('password must be at least 3 characters');
      }
    } else if (type === 'email') {
      if (email) {
        setIsEmail(true);
      } else {
        setErrorMessage('email field cannot be empty');
      }
    }
  };

  const onFocusHandler = arg => {
    setErrorMessage('');
    if (arg === 'phone') {
      setPhoneNumber('');
    }
    if (arg === 'password') {
      setPassword('');
    }
  };

  const submitHandler = async () => {
    setErrorMessage('');
    if (phoneNumber === '') {
      setErrorMessage('phone number field cannot be empty');
      return;
    }
    if (password === '') {
      setErrorMessage('password field cannot be empty');
      return;
    }
    setLoading(true);
    await AsyncStorage.setItem('phone_num', phoneNumber);
    const phone_ = `234${Number(phoneNumber)}`;
    try {
      let url = '/applogin';
      let payload = {
        phone: phone_,
        password,
      };
      console.log(payload, 'submit');
      const response = await auth_request(url, payload);
      if (response.status === 200) {
        let token = response.data.token;
        await AsyncStorage.setItem('token', token);
        getUserByPhone(phone_);
        setLoading(false);
      } else {
        setLoading(false);
        setErrorMessage(response.data.message);
      }
    } catch (err) {
      console.log('My Error: ', err);
      setLoading(false);
    }
  };

  const getUserByPhone = async phone => {
    try {
      const url = `/GetUserByPhone/${phone}`;
      const response = await get_request(url);
      console.log(url);
      if (response.status === 200) {
        console.log(response.data);
        navigation.navigate(dash);
      } else {
        setErrorMessage('User details not found');
        console.log('Hello: ', response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const routeHandler = () => {
    navigation.navigate(phone);
  };

  const forgotHandler = () => {
    navigation.navigate(forgot);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.btns}>
          <View style={{width: '100%'}}>
            <MyText style={styles.sectionTitle}>Keep connected</MyText>
            <MyText
              style={{
                width: '80%',
                paddingVertical: hp(4),
                lineHeight: hp(3.5),
                color: 'green',
              }}>
              Enter your phone number and password to get access to your account
            </MyText>
          </View>
          <View
            style={{
              width: '100%',
              // padding: hp(2),
              elevation: 3,
            }}>
            <TextField
              label="Enter phone number"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholder="Enter phone number"
              // validated={isEmail}
              onFocus={() => onFocusHandler('email')}
              // onBlur={() => handleValidation('email')}
              iconName="phone-portrait"
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
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter password"
              validated={isPassword}
              onFocus={() => onFocusHandler('email')}
              // onBlur={() => handleValidation('password')}
              iconName="lock-closed-outline"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.addon}>
            <TouchableOpacity
              onPress={() => setRem(!rem)}
              style={{flexDirection: 'row'}}>
              {rem ? (
                <MaterialCommunityIcons
                  name="checkbox-marked-circle"
                  size={15}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-circle-outline"
                  size={15}
                />
              )}
              <MyText style={{paddingLeft: 10}}>Remember me</MyText>
            </TouchableOpacity>

            <TouchableOpacity onPress={forgotHandler}>
              <MyText> Forget Password ?</MyText>
            </TouchableOpacity>
          </View>
          <View>
            {errorMessage ? (
              <MyText style={{color: 'red'}}>{errorMessage}</MyText>
            ) : (
              <></>
            )}
          </View>
          <CustomButton
            title="Get Login"
            bgColor={Colors.primary}
            txtColor={Colors.white}
            onPress={submitHandler}
            isLoading={loading}
          />
          <CustomButton
            title="Create Account"
            bgColor={Colors.white}
            txtColor={Colors.primary}
            onPress={routeHandler}
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
export default connect(mapStateToProps, {activeUser})(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(4),
    backgroundColor: Colors.white,
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
