import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';
import {Colors} from '../../constant/theme';
import {dash, phone, register1} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import axios from 'axios';
import CustomButton from '../../components/Button';
import TextField from '../../components/TextField';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeUser} from '../../store/actions/UserAction/UserAction';

const ResetPasswordScreen = ({navigation, activeUser}) => {
  const [email, setEmail] = useState('08093443109');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [rem, setRem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await axios.get(url);
      setUsersList(response.data);
    } catch (err) {
      setErrorMessage('Error in connection, try again');
      console.log('Fetch User Error: ', err);
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
    if (arg === 'email') {
      setEmail('');
    }
    if (arg === 'password') {
      setPassword('');
    }
  };

  const submitHandler = () => {
    navigation.navigate(dash);
  };

  const routeHandler = () => {
    navigation.navigate(phone);
  };

  const handleChangeText = async item => {
    // setPhone(item);
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
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter Reset Code"
              validated={isEmail}
              onFocus={() => onFocusHandler('email')}
              onBlur={() => handleValidation('email')}
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
              label="Email Address"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Enter New Password"
              validated={isEmail}
              onFocus={() => onFocusHandler('email')}
              onBlur={() => handleValidation('email')}
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
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Confirm New Password"
              validated={isPassword}
              onFocus={() => setPassword('')}
              onBlur={() => handleValidation('password')}
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
