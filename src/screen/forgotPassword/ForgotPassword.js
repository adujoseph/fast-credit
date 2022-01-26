import React, {useEffect, useState} from 'react';
import {View, StyleSheet, StatusBar, Text, SafeAreaView} from 'react-native';
import {Colors} from '../../constant/theme';
import {dash, phone, register1, reset} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import axios from 'axios';
import CustomButton from '../../components/Button';
import TextField from '../../components/TextField';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {activeUser} from '../../store/actions/UserAction/UserAction';
import {get_request} from '../../services/makeRequest';

const ForgotPassword = ({navigation, activeUser}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const handleValidation = type => {
    if (type === 'phone_number') {
      if (phoneNumber.length > 10) {
        setIsPhone(true);
      } else {
        setErrorMessage('inavlid phone number');
      }
    }
  };

  const onFocusHandler = arg => {
    setErrorMessage('');
    if (arg === 'phone_number') {
      setPhoneNumber('');
    }
  };

  const submitHandler = async () => {
    setErrorMessage('');
    if (phoneNumber === '') {
      setErrorMessage('Enter phone number');
      return;
    }
    if (phoneNumber.length > 10) {
      setLoading(true);
      try {
        let my_number = `234${Number(phoneNumber)}`;
        const url = `https://fastcredit-ng.com:1102/v1/coreapi/forgotpassword/${my_number}`;
        const response = await get_request(url);
        if (response.status === 200) {
          console.log('when success: ', response.data.data);
          navigation.navigate(reset, {phoneNumber});
        } else if (response.status === 401) {
          setLoading(false);
          setErrorMessage('Access denied');
          console.log('when error: ', response);
        } else {
          setLoading(false);
          setErrorMessage('record not found');
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    } else {
      setLoading(false);
      setErrorMessage('Invalid phone number');
    }
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
            <Text style={styles.sectionTitle}>Forgot Password ?</Text>
            <Text
              style={{
                width: '80%',
                paddingVertical: hp(4),
                lineHeight: hp(3.5),
              }}>
              Enter your phone number to retrieve ypur password
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              // padding: hp(2),
              elevation: 3,
            }}>
            <TextField
              label="Enter Phone Number"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              placeholder="Enter phone number"
              validated={isPhone}
              onFocus={() => onFocusHandler('phone_number')}
              onBlur={() => handleValidation('phone_number')}
              iconName="phone-portrait"
            />
          </View>

          <View>
            {errorMessage ? (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ) : (
              <></>
            )}
          </View>
          <CustomButton
            title="Send Code"
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
export default connect(mapStateToProps, {activeUser})(ForgotPassword);

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
